import { Injectable } from '@angular/core'
import { AbstractControl, FormGroup } from '@angular/forms'

@Injectable({
  providedIn: 'root'
})
export class VrgFormControlService {

  getControlName(control: AbstractControl): string {
    let formGroup = <FormGroup>control.parent
    if (!formGroup) return null
    return this.findControlName(formGroup, control)
  }

  private findControlName(formGroup: FormGroup, control: AbstractControl): string {
    let nameFound: string
    Object.keys(formGroup.controls).forEach(key => {
      let childControl = formGroup.get(key)
      if (childControl === control) nameFound = key
    })

    return nameFound
  }
}
