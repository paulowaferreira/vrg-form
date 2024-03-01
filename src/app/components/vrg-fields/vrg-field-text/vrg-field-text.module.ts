import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

import { VrgFieldTextComponent } from './vrg-field-text.component'
import { VrgLabelModule } from '../../vrg-label/vrg-label.module'

@NgModule({
  declarations: [VrgFieldTextComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VrgLabelModule
  ],
  exports: [VrgFieldTextComponent]
})
export class VrgFieldTextModule {}
