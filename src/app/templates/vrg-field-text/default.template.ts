import { ValidatorFn, Validators } from '@angular/forms'

import { VrgFieldType } from 'src/app/enums'
import { VrgFieldProps } from 'src/app/interfaces'

export const DEFAULT_TEXT_PROPS: VrgFieldProps = {
  initialValue: '',
  type: VrgFieldType.TEXT
}

export const DEFAULT_TEXT_VALIDATORS: ValidatorFn[] = [
  Validators.required
]
