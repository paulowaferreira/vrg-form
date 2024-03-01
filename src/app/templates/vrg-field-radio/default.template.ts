import { ValidatorFn, Validators } from '@angular/forms'

import { VrgFieldType } from 'src/app/enums'
import { VrgField } from 'src/app/interfaces'

export const DEFAULT_RADIO_PROPS: VrgField = {
  initialValue: null,
  type: VrgFieldType.RADIO
}

export const DEFAULT_RADIO_VALIDATORS: ValidatorFn[] = [Validators.required]
