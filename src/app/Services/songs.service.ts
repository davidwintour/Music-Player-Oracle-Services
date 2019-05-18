import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Song} from'./../Models/Songs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  resourceURL="http://localhost:3000/api/songs/";
  
  constructor(private http: HttpClient) {
    console.log("Songs Service Working"); 
  }
  getSongs(): Observable<Song[]> {
    return this.http.get<Song[]>(this.resourceURL);
  }
  getSongsOnly(id): Observable<Song[]>{
    return this.http.get<Song[]>(this.resourceURL+id);
  }
  

}
