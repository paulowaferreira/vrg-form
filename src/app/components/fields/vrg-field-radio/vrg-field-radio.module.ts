import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

import { VrgFieldRadioComponent } from './vrg-field-radio.component'

@NgModule({
  declarations: [VrgFieldRadioComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [VrgFieldRadioComponent]
})
export class VrgFieldRadioModule {}
