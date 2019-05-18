import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenresService {
  genre = {
    name: ""
  }
  constructor(private http: HttpClient) { }

}
