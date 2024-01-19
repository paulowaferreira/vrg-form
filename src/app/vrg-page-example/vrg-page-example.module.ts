import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'

import { VrgPageExampleComponent } from './vrg-page-example.component'
import {
  VrgFieldEmailModule,
  VrgFieldNumberModule,
  VrgFieldPasswordModule,
  VrgFieldPhoneModule,
  VrgFieldTextModule,
  VrgFieldTextareaModule,
  VrgFieldRadioModule
} from '../components/fields'

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
    VrgFieldEmailModule,
    VrgFieldRadioModule
  ],
  exports: [VrgPageExampleComponent],
})
export class VrgPageExampleModule {}
