import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

import { VrgFieldPhoneComponent } from './vrg-field-phone.component'
import { VrgLabelModule } from '../../vrg-label/vrg-label.module'

@NgModule({
  declarations: [VrgFieldPhoneComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VrgLabelModule
  ],
  exports: [VrgFieldPhoneComponent]
})
export class VrgFieldPhoneModule {}
