import { ValidatorFn, Validators } from '@angular/forms'

import { VrgFieldType } from 'src/app/enums'
import { VrgFieldProps } from 'src/app/interfaces'

export const DEFAULT_PASSWORD_PROPS: VrgFieldProps = {
  initialValue: 0,
  type: VrgFieldType.PASSWORD
}

export const DEFAULT_PASSWORD_VALIDATORS: ValidatorFn[] = [Validators.required]
