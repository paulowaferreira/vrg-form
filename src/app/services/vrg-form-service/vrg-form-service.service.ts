import { Injectable } from '@angular/core';

import { FieldModel } from '../../models/field.model';
import { FormBuilder, FormControl, ValidatorFn, Validators } from '@angular/forms';
import { FormValidatorsModel } from '../../models/form-validators.model';
import { ReactiveFormValidatorModel } from '../../models/reactive-form-validator.model';
import { ReactiveFormModel } from '../../models/reactive-form.model';

@Injectable({
  providedIn: 'root'
})
export class VrgFormService {

  constructor(private formBuilder: FormBuilder) { }

  buildReactiveForm(formModel: FieldModel[]): ReactiveFormModel {
    const reactiveForm: ReactiveFormModel = {
      parentForm: this.formBuilder.group({}),
      fieldProperties: []
    }

    formModel.forEach(field => {
      const fieldValidatorsArray = this.getFieldValidatorsArrayConverted(field.control.validators)
      const validators = this.buildValidators(fieldValidatorsArray)
      const newFormControl = new FormControl(field.control.initialValue, validators)  
      reactiveForm.parentForm.addControl(field.control.name, newFormControl)
      reactiveForm.fieldProperties.push(field.properties)
    })

    return reactiveForm
  }

  private getFieldValidatorsArrayConverted(validators: FormValidatorsModel): ReactiveFormValidatorModel[] {
    return Object.entries(validators).map(([key, value]) => ({ key, value }))
  }

  private buildValidators(validators: ReactiveFormValidatorModel[]): ValidatorFn[] {
    return validators.map(({key, value}) => {
      return ['required'].includes(key) 
        ? Validators[key]
        : Validators[key](value)
    })
  }
}
