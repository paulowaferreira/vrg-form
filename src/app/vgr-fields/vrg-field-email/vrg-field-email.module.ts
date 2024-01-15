import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

import { VrgFieldEmailComponent } from './vrg-field-email.component'

@NgModule({
  declarations: [VrgFieldEmailComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [VrgFieldEmailComponent],
})
export class VrgFieldEmailModule { }
