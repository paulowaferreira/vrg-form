import { FieldControlModel } from "./field-control.model"
import { FieldPropertiesModel } from "./field-properties.model"

export interface FieldModel {
  control?: FieldControlModel
  properties?: FieldPropertiesModel
}