import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MovieCardModule } from '../card';
import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';

@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    MovieCardModule,
    DetailRoutingModule
  ]
})
export class DetailModule { }
