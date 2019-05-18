import { Component, OnInit, Input } from '@angular/core';
import { SongService } from 'src/app/Services/api';
import { Song } from 'src/app/Models/Songs';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {

  genres: any = [{name:"POP"},{name:"ROCK"},{name:"JAZZ"},{name:"SWING"}];
  
  songs: Song[];
  constructor(private router: Router, private songService: SongService) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
    //obtener servicio de Songs
    this.songs = [];
      this.songService.getSongs().subscribe((songs) =>{
        //console.log(songs);
        for (let i = 0; i < songs.length; i++) {

          let song = {
            song_code: songs[i].song_code,
            title: songs[i].title,        
            artist: songs[i].artist,           
            base64: "data:image/jpg;base64, "+ songs[i]["meta"]["imgBase64"],
            genre : songs[i].genre,                       
          }
  
          this.songs.push(song);
        }
        console.log(songs);
      } );
  }

 
}
