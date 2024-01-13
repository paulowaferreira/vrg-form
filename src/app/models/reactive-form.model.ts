import { FormGroup } from "@angular/forms";

import { FieldPropertiesModel } from "./field-properties.model";

export interface ReactiveFormModel {
  parentForm?: FormGroup
  fieldProperties?: FieldPropertiesModel[]
}