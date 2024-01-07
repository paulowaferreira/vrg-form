import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { VrgFieldNumberComponent } from './vrg-field-number.component';

@NgModule({
  declarations: [VrgFieldNumberComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [VrgFieldNumberComponent],
})
export class VrgFieldNumberModule { }
