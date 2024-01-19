import { Injectable } from '@angular/core'
import { ValidatorFn, Validators } from '@angular/forms'

import { FieldTypeEnum } from '../../../enums/field-type.enum'
import { PropsModel } from '../../../models'

@Injectable({ providedIn: 'root' })
export class VrgFieldPhoneService {

  getDefaultValues(): PropsModel {
    return {
      ...this.getDefaulProps(),
      validators: this.getDefaultValidators(),
    }
  }

  getDefaulProps(): PropsModel {
    return {
      initialValue: '',
      type: FieldTypeEnum.TEL,
    }
  }

  getDefaultValidators(): ValidatorFn[] {
    return [
      Validators.required,
      Validators.minLength(11),
      Validators.maxLength(11),
    ]
  }
}
