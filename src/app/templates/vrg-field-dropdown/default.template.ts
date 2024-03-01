import { ValidatorFn, Validators } from '@angular/forms'

import { VrgFieldType } from 'src/app/enums'
import { VrgFieldProps } from 'src/app/interfaces/vrg-field-props.interface'

export const DEFAULT_DROPDOWN_PROPS: VrgFieldProps = {
  initialValue: 'Opções',
  type: VrgFieldType.DROPDOWN
}

export const DEFAULT_DROPDOWN_VALIDATORS: ValidatorFn[] = [Validators.required]
