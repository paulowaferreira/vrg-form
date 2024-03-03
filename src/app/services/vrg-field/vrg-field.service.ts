import { ElementRef, Injectable } from '@angular/core'
import { FormControl } from '@angular/forms'

import { VrgFieldValidationError } from 'src/app/interfaces/vrg-field-validator-error.interface'

@Injectable({
  providedIn: 'root'
})
export class VrgFieldService {

  getFormErrors(
    control: FormControl,
    controlName: string,
    element: ElementRef
  ): VrgFieldValidationError[] {
    const errors: VrgFieldValidationError[] = []
    this.checkErrors(control) && this.handleErrors(control, controlName, errors)
    this.handleClassError(errors.length, element)
    return errors
  }
  
  private checkErrors(control: FormControl): boolean {
    return control.invalid && (control.dirty || control.touched) && !control.disabled
  }
  
  private handleErrors(
    control: FormControl,
    controlName: string,
    errors: VrgFieldValidationError[]
  ): void {
    for (const errorKey in control.errors) {
      if (control.errors.hasOwnProperty(errorKey)) {
        const errorValue = control.errors[errorKey]
        const message = this.getErrorMessage(controlName, errorKey, errorValue)
        errors.push({ name: errorKey, message })
      }
    }
  }

  private getErrorMessage(controlName: string, errorKey: string, errorValue: any): string {
    const errorMessages = {
      required: `${controlName} is required.`,
      minlength: `${controlName} should be at least ${errorValue.requiredLength} characters long.`,
      maxlength: `${controlName} should be up to ${errorValue.requiredLength} characters long.`,
    }

    return errorMessages[errorKey] || `${controlName} is invalid.`
  }

  private handleClassError(errors: number, element: ElementRef): void {
    element.nativeElement.classList[errors > 0 ? 'add' : 'remove']('--error')
  }
}
