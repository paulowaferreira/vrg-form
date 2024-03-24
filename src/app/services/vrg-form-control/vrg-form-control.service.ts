import { Injectable } from '@angular/core'
import { AbstractControl, FormGroup } from '@angular/forms'

@Injectable({
  providedIn: 'root'
})
export class VrgFormControlService {

  getControlName(control: AbstractControl): string | null {
    let formGroup = <FormGroup>control.parent
    if (!formGroup) return null

    let name: string
    Object.keys(formGroup.controls).forEach(key => {
      let childControl = formGroup.get(key)
      if (childControl !== control) return
      name = key
    })

    return name
  }
}
