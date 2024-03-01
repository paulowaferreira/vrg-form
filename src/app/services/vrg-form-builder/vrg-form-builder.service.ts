import { Injectable } from '@angular/core'
import { FormBuilder, FormControl, ValidatorFn } from '@angular/forms'

import {
  VrgField,
  VrgReactiveForm
} from 'src/app/interfaces'

@Injectable({
  providedIn: 'root'
})
export class VrgFormBuilder {
  constructor(private formBuilder: FormBuilder) {}

  createReactiveForm(fields: VrgField[]): VrgReactiveForm {
    const form = this.buildInitialForm()
    fields.forEach(field => this.setControl(form, this.configField(field)))
    return form
  }

  private buildControl(
    initialValue: any,
    validators?: ValidatorFn[]
  ): FormControl {
    return new FormControl(initialValue, validators)
  }

  private configField(field: VrgField): VrgField {
    const { disabled, initialValue, validators } = field
    const control = this.buildControl(initialValue, validators)

    if (disabled) control.disable()

    return {
      ...this.deleteUnecessaryProperties(field), 
      control
    }
  }

  private buildInitialForm(): VrgReactiveForm {
    return { controller: this.formBuilder.group({}), fields: [] }
  }

  private deleteUnecessaryProperties(field: VrgField): VrgField {
    delete field.disabled
    delete field.initialValue
    delete field.validators
    return field
  }

  private setControl(
    form: VrgReactiveForm,
    field: VrgField
  ): void {
    form.controller.addControl(field.name, field.control)
    form.fields.push(field)
  }
}
