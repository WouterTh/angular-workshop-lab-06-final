import { SharedListModule } from 'src/app/shared/list';
import { SharedLoadingIndicatorModule } from 'src/app/shared/loading-indicator';

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
    SharedLoadingIndicatorModule,
    ListRoutingModule
  ]
})
export class ListModule { }
