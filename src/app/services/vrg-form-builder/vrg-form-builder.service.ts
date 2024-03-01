import { Injectable } from '@angular/core'
import { FormBuilder, FormControl, ValidatorFn } from '@angular/forms'

import {
  VrgField,
  VrgFieldProps,
  VrgReactiveForm
} from 'src/app/interfaces'

@Injectable({
  providedIn: 'root'
})
export class VrgFormBuilder {
  constructor(private formBuilder: FormBuilder) {}

  createReactiveForm(propsList: VrgFieldProps[]): VrgReactiveForm {
    const form = this.buildInitialForm()
    propsList.forEach(props => this.setControl(form, this.buildField(props)))
    return form
  }

  private buildControl(
    initialValue: any,
    validators?: ValidatorFn[]
  ): FormControl {
    return new FormControl(initialValue, validators)
  }

  private buildField(props: VrgFieldProps): VrgField {
    const { disabled, initialValue, validators } = props
    const control = this.buildControl(initialValue, validators)

    if (disabled) control.disable()

    return { control, props: this.deleteUnecessaryProperties(props) }
  }

  private buildInitialForm(): VrgReactiveForm {
    return { controller: this.formBuilder.group({}), fields: [] }
  }

  private deleteUnecessaryProperties(props: VrgFieldProps): VrgFieldProps {
    delete props.disabled
    delete props.initialValue
    delete props.validators
    return props
  }

  private setControl(
    form: VrgReactiveForm,
    field: VrgField
  ): void {
    form.controller.addControl(field.props.name, field.control)
    form.fields.push(field.props)
  }
}
