import { ValidatorFn, Validators } from '@angular/forms'

import { VrgFieldType } from 'src/app/enums'
import { VrgField } from 'src/app/interfaces'

export const DEFAULT_PASSWORD_PROPS: VrgField = {
  initialValue: 0,
  type: VrgFieldType.PASSWORD
}

export const DEFAULT_PASSWORD_VALIDATORS: ValidatorFn[] = [Validators.required]
