const database = require('../Services/database');
const oracledb = require('oracledb');

const baseQuery =
    `select song_name "title"     
    FROM (SONGS NATURAL JOIN ARTISTS_HAS_SONGS) JOIN ARTISTS USING(ARTIST_CODE) 
 `;

async function find(context) {

    let query = baseQuery;
    const binds = {};

    if (context.id) {
        binds.artist_code = context.id;
        query += `\nwhere artist_code = :artist_code`;
    }

    const result = await database.simpleExecute(query, binds);
       
    return result.rows;
}

module.exports.find = find;

