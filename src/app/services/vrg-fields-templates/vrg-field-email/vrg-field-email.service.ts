import { Injectable } from '@angular/core'
import { ValidatorFn, Validators } from '@angular/forms'

import { FieldTypeEnum } from '../../../enums/field-type.enum'
import { PropsModel } from '../../../models'

@Injectable({ providedIn: 'root' })
export class VrgFieldEmailService {

  getDefaultValues(): PropsModel {
    return {
    ...this.getDefaulProps(),
    validators: this.getDefaultValidators()
    }
  }

  getDefaulProps(): PropsModel {
    return {
      initialValue: '',
      type: FieldTypeEnum.EMAIL,
    }
  }

  getDefaultValidators(): ValidatorFn[] {
    return [
        Validators.required,
        Validators.minLength(1),
        Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com\.br|com)')
      ]
  }
}
