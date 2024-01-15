import { FormGroup } from "@angular/forms";

import { FieldPropertiesModel } from "./field-properties.model";

export interface VrgFormModel {
  reactiveForm?: FormGroup
  fieldProperties?: FieldPropertiesModel[]
}