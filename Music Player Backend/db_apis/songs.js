const database = require('../Services/database');
const oracledb = require('oracledb');

const baseQuery =
    `select song_code "id",
    song_name "title" ,
    artist_name  "artist",    
    artist_genre "genre"
    FROM (SONGS NATURAL JOIN ARTISTS_HAS_SONGS) JOIN ARTISTS USING(ARTIST_CODE) 
 `;

async function find(context) {

    let query = baseQuery;
    const binds = {};

    if (context.id) {
        binds.artist_code = context.id;

        query += `\nwhere song_code = :song_code`;
    }

    const result = await database.simpleExecute(query, binds);

    const meta = {
        name: 'imgBase64'
      };
      const n = result.rows.length;
      for (let i = 0; i < n; i++) {
        result.metaData = meta;        
        result.rows[i].meta = await findImage(result.rows[i].id);
      }
    
    return result.rows;
}

module.exports.find = find;

const selectImageBase64Sql =
  `BEGIN 
     :imgBase64 := SONGS_BASE64(:cod);    
     END;`;

async function findImage(context) {
  const binds = {};
  binds.cod = context;
  binds.imgBase64 = { dir: oracledb.BIND_OUT, type: oracledb.STRING, maxSize: 10000000};
  const result = await database.simpleExecute(selectImageBase64Sql, binds);
  return result.outBinds;
}

module.exports.findImage = findImage;
