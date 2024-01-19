import { Injectable } from '@angular/core'
import {
  FormBuilder,
  FormControl,
  ValidatorFn
} from '@angular/forms'

import { FieldModel, VrgFormModel } from '../../models/'
import { FormControllerItemModel } from 'src/app/models/form-controller-item.model'

@Injectable({
  providedIn: 'root',
})
export class VrgFormService {
  constructor(private formBuilder: FormBuilder) {}

  createForm(fields: FieldModel[]): VrgFormModel  {
    const form = this.buildInitialForm()

    fields.forEach(field => {
      const { control, field: newField } = this.buildFormItem(field)
      if (field.disabled) this.disableField(control)
      this.setReactiveControllerInForm(form, newField, control)
    })

    return form
  }

  private buildControl(initialValue: any, validators?: ValidatorFn[]): FormControl {
    return new FormControl(initialValue, validators)
  }
  
  private buildFormItem(field: FieldModel): FormControllerItemModel {
    const { disabled, initialValue, name, validators } = field
    const control = this.buildControl(initialValue, validators)
    
    if (disabled) this.disableField(control)
    
    this.deleteUnecessaryProperties(field)
    return { field, control }
  }
  
  private buildInitialForm(): VrgFormModel {
    return { reactiveController: this.formBuilder.group({}), fields: [] }
  }

  private deleteUnecessaryProperties(field): void {
    delete field.disabled
    delete field.initialValue
    delete field.validators
  }

  private disableField(formControl: FormControl): void {
    formControl.disable()
  }

  private setReactiveControllerInForm(
    form: VrgFormModel,
    field: FieldModel,
    control: FormControl
  ): void {
    form.reactiveController.addControl(field.name, control)
    form.fields.push(field)
  }
}
