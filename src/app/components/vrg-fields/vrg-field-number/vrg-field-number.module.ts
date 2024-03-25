import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'

import { VrgFieldNumberComponent } from './vrg-field-number.component'
import { VrgLabelModule } from '../../vrg-label/vrg-label.module'

@NgModule({
  declarations: [VrgFieldNumberComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VrgLabelModule
  ],
  exports: [VrgFieldNumberComponent]
})
export class VrgFieldNumberModule {}
