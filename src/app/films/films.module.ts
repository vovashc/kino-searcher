import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsRoutingModule } from './films-routing.module';
import { FilmsComponent } from './films.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    FilmsComponent,
  ],
  imports: [
    CommonModule,
    FilmsRoutingModule,
    MatButtonModule
  ],
})
export class FilmsModule { }
