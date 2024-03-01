import { FormGroup } from '@angular/forms'

import { VrgField } from './vrg-field-props.interface'

export interface VrgReactiveForm {
  controller?: FormGroup
  fields: VrgField[]
}
