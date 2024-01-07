import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'

import { VrgFieldTextModule } from '../vrg-field-text/vrg-field-text.module'
import { VrgPageExampleComponent } from './vrg-page-example.component'
import { VrgFieldNumberModule } from '../vrg-field-number/vrg-field-number.module'
import { VrgFieldPasswordModule } from '../vrg-field-password/vrg-field-password.module'

@NgModule({
  declarations: [VrgPageExampleComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VrgFieldTextModule,
    VrgFieldNumberModule,
    VrgFieldPasswordModule
  ],
  exports: [VrgPageExampleComponent],
})
export class VrgPageExampleModule { }
