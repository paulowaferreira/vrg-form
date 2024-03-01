import { FormControl } from '@angular/forms'

import { VrgFieldProps } from './vrg-field-props.interface'

export interface VrgField {
  props: VrgFieldProps
  control: FormControl
}
