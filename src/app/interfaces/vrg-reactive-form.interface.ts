import { FormGroup } from '@angular/forms'

import { VrgFieldProps } from './vrg-field-props.interface'

export interface VrgReactiveForm {
  controller?: FormGroup
  fields: VrgFieldProps[]
}
