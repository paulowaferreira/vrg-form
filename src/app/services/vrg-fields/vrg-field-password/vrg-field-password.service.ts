import { Injectable } from '@angular/core'
import { ValidatorFn, Validators } from '@angular/forms'

import { FieldTypeEnum } from '../../../enums/field-type.enum'
import { FieldModel } from 'src/app/models/field.model'

@Injectable({ providedIn: 'root' })
export class VrgFieldPasswordService {

  getDefaultValues(): FieldModel {
    return {
    ...this.getPropsDefault(),
    validators: this.getValidatorsDefault()
    }
  }

  getPropsDefault() {
    return {
      initialValue: 0,
      type: FieldTypeEnum.PASSWORD,
    }
  }

  getValidatorsDefault(): ValidatorFn[] {
    return [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(8),
    ]
  }
}
