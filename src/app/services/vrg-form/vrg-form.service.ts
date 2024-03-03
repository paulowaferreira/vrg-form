import { Injectable } from '@angular/core'
import { FormBuilder, FormControl, ValidatorFn, Validators } from '@angular/forms'

import {
  VrgField,
  VrgReactiveForm
} from 'src/app/interfaces'
import { VrgFieldValidators } from 'src/app/interfaces/vrg-field-validators.interface'

@Injectable({
  providedIn: 'root'
})
export class VrgFormService {
  constructor(private formBuilder: FormBuilder) {}

  buildForm(fields: VrgField[]): VrgReactiveForm {
    const controls = {}
    fields.forEach(field => {
      const { controlName, initialValue, validators } = field
      const newControl = new FormControl(initialValue, this.prepareValidators(validators))
      field.control = newControl
      if(field.disabled) newControl.disable()
      controls[controlName] = newControl
    })
    return {
      formGroup: this.formBuilder.group(controls),
      fields
    }
  }

  private prepareValidators(validators: VrgFieldValidators): ValidatorFn[] {
    return Object.entries(validators).map(([key, value]) => {
      return typeof value === 'boolean'
        ? Validators[key]
        : Validators[key](value)
    })
  }
}
