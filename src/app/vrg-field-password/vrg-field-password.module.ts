import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

import { VrgFieldPasswordComponent } from './vrg-field-password.component'

@NgModule({
  declarations: [VrgFieldPasswordComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [VrgFieldPasswordComponent],
})
export class VrgFieldPasswordModule { }
