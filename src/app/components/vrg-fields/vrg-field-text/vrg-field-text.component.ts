import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'

import { VrgFieldValidationError } from 'src/app/interfaces/vrg-field-validator-error.interface'
import { VrgFieldService } from 'src/app/services/vrg-field/vrg-field.service'
import { VrgFieldBase } from '../base-class/vrg-field-base.class'

@Component({
  selector: 'vrg-field-text',
  templateUrl: './vrg-field-text.component.html',
  styleUrls: ['./vrg-field-text.component.scss']
})
export class VrgFieldTextComponent extends VrgFieldBase implements OnInit {
  @ViewChild('inputField', {static: true}) elementRef: ElementRef

  errors: VrgFieldValidationError[] = []

  constructor(private fieldService: VrgFieldService) {
    super()
  }

  ngOnInit(): void {
    this.handleValueChange()
  }

  clearInput(): void {
    this.control.setValue('')
  }

  private handleValueChange(): void {
    this.control.valueChanges.subscribe(value => {
      this.isFilled = !!value
      this.errors = this.fieldService.getFormErrors(
        this.control,
        this.controlName,
        this.elementRef
      )
    })
  }
}
