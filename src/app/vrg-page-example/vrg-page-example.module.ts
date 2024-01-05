import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { VrgFieldNumberModule } from '../vrg-field-number/vrg-field-number.module';
import { VrgFieldTextModule } from '../vrg-field-text/vrg-field-text.module';
import { VrgPageExampleComponent } from './vrg-page-example.component';

@NgModule({
  declarations: [VrgPageExampleComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VrgFieldTextModule,
    VrgFieldNumberModule
  ],
  exports: [VrgPageExampleComponent],
})
export class VrgPageExampleModule { }
