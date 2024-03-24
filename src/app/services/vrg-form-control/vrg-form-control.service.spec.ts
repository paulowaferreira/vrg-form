import { TestBed } from '@angular/core/testing'
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms'

import { VrgFormControlService } from './vrg-form-control.service'

describe(`${VrgFormControlService.name}`, () => {
  let service: VrgFormControlService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      providers: [VrgFormControlService]
    })

    service = TestBed.get(VrgFormControlService)
  })

  it('should return correct control name', () => {
    const formGroup = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    })

    const usernameControl = formGroup.get('username')
    const controlName = service.getControlName(usernameControl)
    expect(controlName).toBe('username')
  })

  it('should return null if control is not found in parent', () => {
    const control = new FormControl()
    const controlName = service.getControlName(control)
    expect(controlName).toBeNull()
  })
})
