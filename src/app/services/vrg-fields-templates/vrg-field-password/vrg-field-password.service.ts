import { Injectable } from '@angular/core'
import { ValidatorFn, Validators } from '@angular/forms'

import { FieldTypeEnum } from '../../../enums/'
import { PropsModel } from '../../../models'

@Injectable({ providedIn: 'root' })
export class VrgFieldPasswordService {

  getDefaultValues(): PropsModel {
    return {
    ...this.getDefaulProps(),
    validators: this.getDefaultValidators()
    }
  }

  getDefaulProps() {
    return {
      initialValue: 0,
      type: FieldTypeEnum.PASSWORD,
    }
  }

  getDefaultValidators(): ValidatorFn[] {
    return [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(8),
    ]
  }
}
