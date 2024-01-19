import { Injectable } from '@angular/core'
import { ValidatorFn, Validators } from '@angular/forms'

import { FieldTypeEnum } from '../../../enums'
import { PropsModel } from '../../../models'

@Injectable({ providedIn: 'root' })
export class VrgFieldDropdownService {

  getDefaultValues(): PropsModel {
    return {
    ...this.getDefaulProps(),
    validators: this.getDefaultValidators()
    }
  }

  getDefaulProps(): PropsModel {
    return {
      initialValue: 'Opções',
      type: FieldTypeEnum.DROPDOWN,
    }
  }

  getDefaultValidators(): ValidatorFn[] {
    return [ Validators.required ]
  }
}
