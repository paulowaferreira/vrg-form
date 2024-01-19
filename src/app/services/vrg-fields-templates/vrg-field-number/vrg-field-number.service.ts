import { Injectable } from '@angular/core'
import { ValidatorFn, Validators } from '@angular/forms'

import { FieldTypeEnum } from '../../../enums/'
import { PropsModel } from '../../../models'

@Injectable({ providedIn: 'root' })
export class VrgFieldNumberService {

  getDefaultValues(): PropsModel {
    return {
    ...this.getDefaulProps(),
    validators: this.getDefaultValidators()
    }
  }

  getDefaulProps(): PropsModel {
    return {
      initialValue: 0,
      step: 1,
      type: FieldTypeEnum.NUMBER,
    }
  }

  getDefaultValidators(): ValidatorFn[] {
    return [
        Validators.required,
        Validators.min(1),
        Validators.max(150)
      ]
  }
}
