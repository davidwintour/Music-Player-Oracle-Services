import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { ArtistService,  ArtistSongsService } from 'src/app/Services/api';
import { Artist } from 'src/app/Models/Artists';
import { Artist_Songs } from 'src/app/Models/Artist_Songs';

@Component({
  selector: 'app-single-artist',
  templateUrl: './single-artist.component.html',
  styleUrls: ['./single-artist.component.scss']
})
export class SingleArtistComponent implements OnInit {

singleArtist:Artist[];
songs:Artist_Songs[];

  constructor(private router: Router, private activeRoute : ActivatedRoute,
     private artistService: ArtistService,
     private songsService: ArtistSongsService) {

  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
    //obtener servicio de Artists
    this.singleArtist=[];
    this.songs=[];
    this.artistService.getArtistsOnly(this.activeRoute.params["value"]["id"]).subscribe((artists) =>{    

          let artist = {
            id: artists["id"],
            name: artists["name"],       
            genre: artists["genre"],  
            meta: "data:image/jpg;base64, "+ artists["meta"]["imgBase64"]                    
          }  
          this.singleArtist.push(artist);              
        //console.log(this.singleArtist);
      } );

      this.songsService.getSongsOnly(this.activeRoute.params["value"]["id"]).subscribe((songs) =>{    
        console.log(songs);
        for (let i = 0; i < songs.length; i++) {

          let song = {
            title: songs[i].title                                
          }
  
          this.songs.push(song);
          
        }
    } );
  }

}
