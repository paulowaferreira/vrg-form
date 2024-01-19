import { Injectable } from '@angular/core'
import { ValidatorFn, Validators } from '@angular/forms'

import { FieldTypeEnum } from '../../../enums/field-type.enum'
import { FieldModel } from 'src/app/models/field.model'

@Injectable({ providedIn: 'root' })
export class VrgFieldTextareaService {

  getDefaultValues(): FieldModel {
    return {
      ...this.getPropsDefault(),
      ...this.getValidatorsDefault()
    }
  }

  getPropsDefault(): FieldModel {
    return {
      initialValue: '',
      cols: 20,
      rows: 2,
      type: FieldTypeEnum.TEXTAREA,
    }
  }

  getValidatorsDefault(): ValidatorFn[] {
    return [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(50),
    ]
  }
}
