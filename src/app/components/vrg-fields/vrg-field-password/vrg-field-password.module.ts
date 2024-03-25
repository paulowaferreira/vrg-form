import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'

import { VrgLabelModule } from '../../vrg-label/vrg-label.module'
import { VrgFieldPasswordComponent } from './vrg-field-password.component'

@NgModule({
  declarations: [VrgFieldPasswordComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VrgLabelModule
  ],
  exports: [VrgFieldPasswordComponent]
})
export class VrgFieldPasswordModule {}
