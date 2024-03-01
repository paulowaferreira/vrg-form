import { ValidatorFn, Validators } from '@angular/forms'

import { VrgFieldType } from 'src/app/enums'
import { VrgFieldProps } from 'src/app/interfaces'

export const DEFAULT_PHONE_PROPS: VrgFieldProps = {
  initialValue: '',
  type: VrgFieldType.TEL
}

export const DEFAULT_PHONE_VALIDATORS: ValidatorFn[] = [
  Validators.minLength(11),
  Validators.maxLength(11)
]
