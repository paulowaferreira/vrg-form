import { Injectable } from '@angular/core'
import { ValidatorFn, Validators } from '@angular/forms'

import { FieldTypeEnum } from '../../../enums/field-type.enum'
import { FieldModel } from 'src/app/models/field.model'

@Injectable({ providedIn: 'root' })
export class VrgFieldTextService {

  getDefaultValues(): FieldModel {
    return {
      ...this.getPropsDefault(),
      validators: this.getValidatorsDefault(),
    }
  }

  getPropsDefault(): FieldModel {
    return {
      initialValue: '',
      type: FieldTypeEnum.TEXT,
    }
  }

  getValidatorsDefault(): ValidatorFn[] {
    return [
      Validators.required,
      Validators.maxLength(50),
      Validators.minLength(4),
    ]
  }
}
