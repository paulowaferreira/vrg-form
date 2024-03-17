import { ElementRef, Injectable } from '@angular/core'
import { FormControl } from '@angular/forms'

import { VrgFieldValidationError } from 'src/app/interfaces/vrg-field-validator-error.interface'

@Injectable({
  providedIn: 'root'
})
export class VrgFieldErrorService {

  getFormErrors(
    control: FormControl,
    controlName: string,
    element: ElementRef
  ): VrgFieldValidationError {
    let error: VrgFieldValidationError
    if (this.hasErrors(control)) {
      error = this.handleErrors(control, controlName)
    }

    this.handleClassError(error, element)
    return error
  }

  private hasErrors(control: FormControl): boolean {
    return control.invalid && (control.dirty || control.touched) && !control.disabled
  }

  private handleErrors(
    control: FormControl,
    label: string
  ): VrgFieldValidationError {
    let error: VrgFieldValidationError
    for (const errorKey in control.errors) {
      if (control.errors.hasOwnProperty(errorKey)) {
        const message = this.getErrorMessage(label, errorKey)
        error = { name: errorKey, message }
      }
    }
    return error
  }

  private getErrorMessage(errorKey: string, errorValue: any): string {
    const errorMessages = {
      required: `Campo obrigatório.`,
      minlength: `O mínimo de caracteres é ${errorValue.requiredLength}.`,
      maxlength: `O máximo de caracteres é ${errorValue.requiredLength}.`,
    }

    return errorMessages[errorKey]
  }

  private handleClassError(errors: VrgFieldValidationError, element: ElementRef): void {
    element.nativeElement.classList[!!errors ? 'add' : 'remove']('--error')
  }
}
