import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

import { VrgFieldRadioComponent } from './vrg-field-radio.component'
import { VrgLabelModule } from '../../vrg-label/vrg-label.module'

@NgModule({
  declarations: [VrgFieldRadioComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VrgLabelModule
  ],
  exports: [VrgFieldRadioComponent]
})
export class VrgFieldRadioModule {}
