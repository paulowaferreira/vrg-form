import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { VrgFieldDropdownComponent } from './vrg-field-dropdown.component';

@NgModule({
  declarations: [VrgFieldDropdownComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [VrgFieldDropdownComponent],
})
export class VrgFieldDropdownModule { }
