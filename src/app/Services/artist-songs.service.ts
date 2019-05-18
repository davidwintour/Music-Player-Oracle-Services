import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artist_Songs } from './../Models/Artist_Songs';

@Injectable({
  providedIn: 'root'
})
export class ArtistSongsService {

  resourceURL="http://localhost:3000/api/artistsongs/";
  
  constructor(private http: HttpClient) {
    console.log("Artist_Songs Service Working"); 
  }
  getSong(): Observable<Artist_Songs[]> {
    return this.http.get<Artist_Songs[]>(this.resourceURL);
  }
  getSongsOnly(id): Observable<Artist_Songs[]>{
    return this.http.get<Artist_Songs[]>(this.resourceURL+id);
  }
}
