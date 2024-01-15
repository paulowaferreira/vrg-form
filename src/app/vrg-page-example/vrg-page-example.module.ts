import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'

import { VrgFieldTextModule } from '../vgr-fields/vrg-field-text/vrg-field-text.module'
import { VrgPageExampleComponent } from './vrg-page-example.component'
import { VrgFieldNumberModule } from '../vgr-fields/vrg-field-number/vrg-field-number.module'
import { VrgFieldPasswordModule } from '../vgr-fields/vrg-field-password/vrg-field-password.module'
import { VrgFieldTextareaModule } from '../vgr-fields/vrg-field-textarea/vrg-field-textarea.module'
import { VrgFieldPhoneModule } from '../vgr-fields/vrg-field-phone/vrg-field-phone.module'
import { VrgFieldEmailModule } from '../vgr-fields/vrg-field-email/vrg-field-email.module'

@NgModule({
  declarations: [VrgPageExampleComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VrgFieldTextModule,
    VrgFieldNumberModule,
    VrgFieldPasswordModule,
    VrgFieldPhoneModule,
    VrgFieldTextareaModule,
    VrgFieldEmailModule
  ],
  exports: [VrgPageExampleComponent],
})
export class VrgPageExampleModule { }
