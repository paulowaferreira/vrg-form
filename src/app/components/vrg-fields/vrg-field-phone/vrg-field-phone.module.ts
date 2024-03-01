import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

import { VrgFieldPhoneComponent } from './vrg-field-phone.component'

@NgModule({
  declarations: [VrgFieldPhoneComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [VrgFieldPhoneComponent]
})
export class VrgFieldPhoneModule {}
