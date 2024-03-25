import { Injectable } from '@angular/core'
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms'

import {
  VrgField,
  VrgReactiveForm
} from 'src/app/interfaces'
import { VrgFieldValidators } from 'src/app/interfaces/vrg-field-validators.interface'

@Injectable({
  providedIn: 'root'
})
export class VrgFormService {
  constructor(private formBuilder: FormBuilder) { }

  buildForm(fields: VrgField[]): VrgReactiveForm {
    const controls = {}
    fields.forEach(field => {
      const { controlName, initialValue, validators } = field
      const validatorsFormatted = this.prepareValidators(validators)
      this.handleRequired(field, validatorsFormatted)
      controls[controlName] = this.getNewControl(field, initialValue, validatorsFormatted)
    })
    return {
      formGroup: this.formBuilder.group(controls),
      fields
    }
  }

  private getNewControl(field: VrgField, initialValue: any, validatorsFormatted: ValidatorFn[]) {
    const newControl = new FormControl(initialValue, validatorsFormatted)
    field.disabled && newControl.disable()
    return newControl
  }

  private handleRequired(field: VrgField, validatorsFormatted: ValidatorFn[]): void {
    field.required = !!validatorsFormatted.find(validator => validator.name === 'required')
  }

  private prepareValidators(validators: VrgFieldValidators): ValidatorFn[] {
    return Object.entries(validators)
      .filter(([key, value]) => value !== false)
      .map(([key, value]) => {
        return value === true
          ? Validators[key]
          : Validators[key](value)
      })
  }
}
