import { FormControl } from '@angular/forms'

import { FieldModel } from './field.model'

export interface FormControllerItemModel {
  field: FieldModel
  control: FormControl
}