import { ValidatorFn, Validators } from '@angular/forms'

import { VrgFieldType } from 'src/app/enums'
import { VrgFieldProps } from 'src/app/interfaces'

export const DEFAULT_EMAIL_PROPS: VrgFieldProps = {
  initialValue: '',
  type: VrgFieldType.EMAIL
}

export const DEFAULT_EMAIL_VALIDATORS: ValidatorFn[] = [
  Validators.minLength(1),
  Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.(com.br|com)')
]
