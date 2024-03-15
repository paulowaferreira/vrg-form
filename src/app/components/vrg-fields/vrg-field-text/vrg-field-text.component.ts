import { Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core'

import { VrgFieldService } from 'src/app/services/vrg-field/vrg-field.service'
import { VrgFieldBase } from '../base-class/vrg-field-base.class'

@Component({
  selector: 'vrg-field-text',
  templateUrl: './vrg-field-text.component.html',
  styleUrls: ['./vrg-field-text.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VrgFieldTextComponent extends VrgFieldBase implements OnInit {
  constructor(
    private fieldService: VrgFieldService,
    private elementRef: ElementRef
  ) {
    super()
  }

  ngOnInit(): void {
    this.handleValueChange()
  }

  private handleValueChange(): void {
    this.control.valueChanges.subscribe(value => {
      this.isFilled = !!value
      this.error = this.fieldService.getFormErrors(
        this.control,
        this.labelText,
        this.elementRef
      )
    })
  }
}
