import { FormGroup } from '@angular/forms'

import { VrgField } from './vrg-field-props.interface'

export interface VrgReactiveForm {
  formGroup: FormGroup
  fields: VrgField[]
}
