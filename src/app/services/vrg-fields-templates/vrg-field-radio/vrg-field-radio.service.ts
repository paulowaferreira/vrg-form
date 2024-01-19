import { Injectable } from '@angular/core'
import { ValidatorFn, Validators } from '@angular/forms'

import { FieldTypeEnum } from '../../../enums/'
import { PropsModel } from '../../../models'

@Injectable({ providedIn: 'root' })
export class VrgFieldRadioService {

  getDefaultValues(): PropsModel {
    return {
    ...this.getDefaulProps(),
    validators: this.getDefaultValidators()
    }
  }

  getDefaulProps(): PropsModel {
    return {
      initialValue: null,
      type: FieldTypeEnum.RADIO,
    }
  }

  getDefaultValidators(): ValidatorFn[] {
    return [ Validators.required ]
  }
}
