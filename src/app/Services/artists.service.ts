import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Artist} from'./../Models/Artists';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  resourceURL="http://localhost:3000/api/artists/";
  
  constructor(private http: HttpClient) {
    console.log("Artists Service Working"); 
  }
  getArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.resourceURL);
  }
  getArtistsOnly(id): Observable<Artist[]>{
    return this.http.get<Artist[]>(this.resourceURL+id);
  }
  

}
