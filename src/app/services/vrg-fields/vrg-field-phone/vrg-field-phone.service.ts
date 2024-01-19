import { Injectable } from '@angular/core'
import { ValidatorFn, Validators } from '@angular/forms'

import { FieldTypeEnum } from '../../../enums/field-type.enum'
import { FieldModel } from 'src/app/models/field.model'

@Injectable({ providedIn: 'root' })
export class VrgFieldPhoneService {

  getDefaultValues(): FieldModel {
    return {
      ...this.getPropsDefault(),
      validators: this.getValidatorsDefault(),
    }
  }

  getPropsDefault(): FieldModel {
    return {
      initialValue: '',
      type: FieldTypeEnum.TEL,
    }
  }

  getValidatorsDefault(): ValidatorFn[] {
    return [
      Validators.required,
      Validators.minLength(11),
      Validators.maxLength(11),
    ]
  }
}
