import { SharedListModule } from 'src/app/shared/list';
import { LoadingIndicatorModule } from 'src/app/shared/loading-indicator/loading-indicator.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    SharedListModule,
    LoadingIndicatorModule,
    ListRoutingModule
  ]
})
export class ListModule { }
