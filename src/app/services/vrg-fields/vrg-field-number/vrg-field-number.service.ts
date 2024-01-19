import { Injectable } from '@angular/core'
import { ValidatorFn, Validators } from '@angular/forms'

import { FieldTypeEnum } from '../../../enums/field-type.enum'
import { FieldModel } from 'src/app/models/field.model'

@Injectable({ providedIn: 'root' })
export class VrgFieldNumberService {

  getDefaultValues(): FieldModel {
    return {
    ...this.getPropsDefault(),
    validators: this.getValidatorsDefault()
    }
  }

  getPropsDefault(): FieldModel {
    return {
      initialValue: 0,
      step: 1,
      type: FieldTypeEnum.NUMBER,
    }
  }

  getValidatorsDefault(): ValidatorFn[] {
    return [
        Validators.required,
        Validators.min(1),
        Validators.max(150)
      ]
  }
}
