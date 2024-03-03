export interface VrgFieldValidators {
  required?: boolean
  min?: number
  max?: number
  minLength?: number
  maxLength?: number
  pattern?: string | RegExp
  email?: boolean
}
