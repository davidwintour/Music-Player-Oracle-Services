import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/Services/api';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.scss']
})
export class InitialPageComponent implements OnInit {

  constructor(private _service: ArtistService) {
  }

  ngOnInit() {
  }

}
