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
  private propsToRemove: string[] = ['initialValue', 'validators']

  constructor(private formBuilder: FormBuilder) {}

  createForm(fields: VrgField[]): VrgReactiveForm {
    const form = this.buildInitialForm()
    fields.forEach(field => this.setControl(form, this.prepareField(field)))
    return form
  }

  private buildControl(
    initialValue: any,
    validators?: ValidatorFn[]
  ): FormControl {
    return new FormControl(initialValue, validators)
  }

  private prepareField(field: VrgField): VrgField {
    const { disabled, initialValue, validators } = field
    const control = this.buildControl(initialValue, validators)

    if (disabled) control.disable()

    return {
      ...this.deleteUnecessaryProps(field, ...this.propsToRemove),
      control
    }
  }

  private buildInitialForm(): VrgReactiveForm {
    return { controller: this.formBuilder.group({}), fields: [] }
  }

  private deleteUnecessaryProps(
    field: VrgField, 
    ...propNames: string[]
  ): VrgField {
    propNames.forEach(propName => delete field[propName])
    return field
  }

  private setControl(
    form: VrgReactiveForm,
    field: VrgField
  ): void {
    form.controller.addControl(field.name, field.control)
    form.fields.push(field)
    this.deleteUnecessaryProps(field, 'control')
  }
}
