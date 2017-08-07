import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoviePage } from './movie';

import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
  declarations: [
    MoviePage,
  ],
  imports: [
    IonicPageModule.forChild(MoviePage),
    Ionic2RatingModule
  ],
})
export class MoviePageModule {}
