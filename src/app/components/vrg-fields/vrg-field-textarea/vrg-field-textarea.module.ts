import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

import { VrgFieldTextareaComponent } from './vrg-field-textarea.component'
import { VrgLabelModule } from '../../vrg-label/vrg-label.module'

@NgModule({
  declarations: [VrgFieldTextareaComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VrgLabelModule
  ],
  exports: [VrgFieldTextareaComponent]
})
export class VrgFieldTextareaModule {}
