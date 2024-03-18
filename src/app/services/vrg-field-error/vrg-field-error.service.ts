import { ElementRef, Injectable } from '@angular/core'
import { AbstractControl, FormControl } from '@angular/forms'

import { VrgFieldValidationError } from 'src/app/interfaces/vrg-field-validator-error.interface'

@Injectable({
  providedIn: 'root'
})
export class VrgFieldErrorService {

  getFormErrors(
    control: AbstractControl,
    element: ElementRef
  ): VrgFieldValidationError {
    let error: VrgFieldValidationError
    if (this.hasErrors(control)) {
      error = this.handleErrors(control)
    }

    this.handleClassError(error, element)
    return error
  }

  private hasErrors(control: AbstractControl): boolean {
    return control.invalid && (control.dirty || control.touched) && !control.disabled
  }

  private handleErrors(
    control: AbstractControl
  ): VrgFieldValidationError {
    const errors: VrgFieldValidationError[] = []
    for (const errorKey in control.errors) {
      if (control.errors.hasOwnProperty(errorKey)) {
        const message = this.getErrorMessage(errorKey, control.errors[errorKey])
        errors.push({ name: errorKey, message })
      }
    }

    return this.handleErrorResult(errors)
  }

  private getErrorMessage(errorKey: string, errorValue: any): string {
    const errorMessages = {
      required: `Campo obrigatório.`,
      minlength: `O mínimo de caracteres é ${errorValue.requiredLength}.`,
      maxlength: `O máximo de caracteres é ${errorValue.requiredLength}.`,
      pattern: `O campo deve ter pelo menos 1 letra maiúscula, 1 número e 1 caractere especial.`
    }

    return errorMessages[errorKey]
  }

  private handleClassError(errors: VrgFieldValidationError, element: ElementRef): void {
    element.nativeElement.classList[!!errors ? 'add' : 'remove']('--error')
  }

  handleErrorResult(errors: VrgFieldValidationError[]): VrgFieldValidationError {
    const hasPattern = errors.find(error => error.name === 'pattern')
    if(hasPattern && errors.length > 1) return errors.find(error => error.name === 'pattern')
    return errors[0]
  }
}
