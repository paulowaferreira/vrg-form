import { FormGroup } from '@angular/forms'

import { FieldModel } from './field.model'

export interface VrgFormModel {
  reactiveController?: FormGroup
  fields: FieldModel[]
}