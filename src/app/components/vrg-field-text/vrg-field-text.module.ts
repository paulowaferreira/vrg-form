import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { VrgFieldTextComponent } from './vrg-field-text.component';

@NgModule({
  declarations: [VrgFieldTextComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [VrgFieldTextComponent],
})
export class VrgFieldTextModule { }
