import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SingleArtistComponent} from './Components/single-artist/single-artist.component';
import { InitialPageComponent } from './Components/initial-page/initial-page.component';

const routes: Routes = [
  {path:'' , redirectTo: '/initialPage', pathMatch:'full'}, 
  {path:'initialPage' , component:InitialPageComponent},
  {path:'Artist/:id' , component: SingleArtistComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
