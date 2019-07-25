import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {VideoDetailComponent} from './components/video-detail/video-detail.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'video/:id', component: VideoDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
