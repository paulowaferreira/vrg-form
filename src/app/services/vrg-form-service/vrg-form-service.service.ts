import { Injectable } from '@angular/core';

import { ReactiveFormModel } from '../../models/reactive-form.model';
import { FormBuilder, FormControl } from '@angular/forms';
import { ReactiveFormValidatorsModel } from 'src/app/models/reactive-form-validators.model';

@Injectable({
  providedIn: 'root'
})
export class VrgFormService {

  constructor(private formBuilder: FormBuilder) { }

  buildReactiveForm(formModel: ReactiveFormModel[]) {
    const newReactiveForm = this.formBuilder.group({})

    formModel.forEach(field => {
      const validatorsArray = this.getValidatorsArray(field.control.validators)
      validatorsArray.forEach(validator => {
        // newReactiveForm.addControl(field.properties.controlName, )
        // Falta criar a lógica de pegar os validators e montar os validators para o formcontrol.
      })
    })
  }

  getValidatorsArray(validators: ReactiveFormValidatorsModel) {
    return Object.entries(validators).map(([key, value]) => ({ key, value }))
  }
}
