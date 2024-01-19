import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

import { VrgFieldTextareaComponent } from './vrg-field-textarea.component'

@NgModule({
  declarations: [VrgFieldTextareaComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [VrgFieldTextareaComponent],
})
export class VrgFieldTextareaModule { }
