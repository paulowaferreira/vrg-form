import { Injectable } from '@angular/core'
import { FormBuilder, FormControl, ValidatorFn } from '@angular/forms'

import {
  PropsModel,
  FieldModel,
  FormControlItemModel,
  VrgFormModel
} from '../../models'

@Injectable({
  providedIn: 'root'
})
export class VrgFormBuilder {
  constructor(private formBuilder: FormBuilder) {}

  createReactiveForm(props: PropsModel[]): VrgFormModel {
    const form = this.buildInitialForm()
    props.forEach(item =>
      this.setControlInForm(form, this.buildControlAndField(item))
    )
    return form
  }

  private buildControl(
    initialValue: any,
    validators?: ValidatorFn[]
  ): FormControl {
    return new FormControl(initialValue, validators)
  }

  private buildControlAndField(props: PropsModel): FormControlItemModel {
    const { disabled, initialValue, validators } = props
    const control = this.buildControl(initialValue, validators)

    if (disabled) control.disable()

    return { control, fields: this.deleteUnecessaryProperties(props) }
  }

  private buildInitialForm(): VrgFormModel {
    return { reactiveController: this.formBuilder.group({}), fields: [] }
  }

  private deleteUnecessaryProperties(props: PropsModel): FieldModel {
    delete props.disabled
    delete props.initialValue
    delete props.validators
    return props
  }

  private setControlInForm(
    form: VrgFormModel,
    item: FormControlItemModel
  ): void {
    form.reactiveController.addControl(item.fields.name, item.control)
    form.fields.push(item.fields)
  }
}
