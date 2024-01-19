import { Injectable } from '@angular/core'
import { ValidatorFn, Validators } from '@angular/forms'

import { FieldTypeEnum } from '../../../enums/field-type.enum'
import { FieldModel } from 'src/app/models/field.model'

@Injectable({ providedIn: 'root' })
export class VrgFieldEmailService {

  getDefaultValues(): FieldModel {
    return {
    ...this.getPropsDefault(),
    validators: this.getValidatorsDefault()
    }
  }

  getPropsDefault(): FieldModel {
    return {
      initialValue: '',
      type: FieldTypeEnum.EMAIL,
    }
  }

  getValidatorsDefault(): ValidatorFn[] {
    return [
        Validators.required,
        Validators.minLength(1),
        Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com\.br|com)')
      ]
  }
}
