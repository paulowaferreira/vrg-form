import { ElementRef, Injectable } from '@angular/core'
import { AbstractControl, FormControl, FormGroup } from '@angular/forms'

import { VrgFieldValidationError } from 'src/app/interfaces/vrg-field-validator-error.interface'
import { VrgFormControlService } from '../vrg-form-control/vrg-form-control.service'

@Injectable({
  providedIn: 'root'
})
export class VrgFieldErrorService {

  constructor(private controlService: VrgFormControlService) { }

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
        const controlName = this.controlService.getControlName(control)
        const message = this.getErrorMessage(errorKey, control.errors[errorKey], controlName)
        errors.push({ name: errorKey, message })
      }
    }

    return this.handleErrorResult(errors)
  }

  private getErrorMessage(errorKey: string, errorValue: any, controlName: string): string {
    if (errorKey === 'pattern') return this.handlePatternError(controlName)

    const errorMessages = {
      required: `Campo obrigatório.`,
      minlength: `O mínimo de caracteres é ${errorValue.requiredLength}.`,
      maxlength: `O máximo de caracteres é ${errorValue.requiredLength}.`,
      min: `O valor mínimo para o campo é ${errorValue.min}.`
    }

    return errorMessages[errorKey]
  }

  private handleClassError(errors: VrgFieldValidationError, element: ElementRef): void {
    element.nativeElement.classList[!!errors ? 'add' : 'remove']('--error')
  }

  private handleErrorResult(errors: VrgFieldValidationError[]): VrgFieldValidationError {
    const hasPattern = errors.find(error => error.name === 'pattern')
    if (hasPattern && errors.length > 1) return errors.find(error => error.name === 'pattern')
    return errors[0]
  }

  private handlePatternError(controlName: string): string {
    const patterns = {
      email: 'E-mail inválido',
      password: `O campo deve ter pelo menos 1 letra maiúscula, 1 número e 1 caractere especial.`,
      phone: 'Número inválido'
    }

    return patterns[controlName]
  }
}
