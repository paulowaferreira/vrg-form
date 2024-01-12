import { FieldControlModel } from "./field-control.model"
import { FieldPropertiesModel } from "./field-properties.model"

export interface ReactiveFormModel {
  properties?: FieldPropertiesModel,
  control?: FieldControlModel
}