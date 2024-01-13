import { FormValidatorsModel } from "./form-validators.model";

export interface FieldControlModel {
  name: string
  initialValue?: any
  validators?: FormValidatorsModel
}