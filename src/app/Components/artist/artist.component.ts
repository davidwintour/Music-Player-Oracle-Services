import { Component, OnInit } from '@angular/core';
//Server
import { ArtistService } from '../../Services/api';
import { Router, NavigationEnd } from '@angular/router';
import { Artist } from '../../Models/Artists';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  artists: Artist[];
  constructor(private router: Router, private artistService: ArtistService) {

  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
    //obtener servicio de Artists
    this.artists=[];
    this.artistService.getArtists()
      .subscribe((artists) =>{

        for (let i = 0; i < artists.length; i++) {
         // console.log(typeof artists[i].meta["imgBase64"]);

         var base64= artists[i].meta["imgBase64"];          
          let artist = {
            id: artists[i].id,
            name: artists[i].name,       
            genre: artists[i].genre,  
            meta: "data:image/jpg;base64, "+ base64                  
          }
  
          this.artists.push(artist);
        }
              
        console.log(this.artists);
      } );
  }
}
