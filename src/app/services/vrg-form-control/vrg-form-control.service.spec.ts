import { TestBed } from '@angular/core/testing'
import { FormBuilder, ReactiveFormsModule } from '@angular/forms'

import { VrgFormControlService } from './vrg-form-control.service'

describe(`${VrgFormControlService.name}`, () => {
  let service: VrgFormControlService
  let formBuilder: FormBuilder

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      providers: [VrgFormControlService, FormBuilder]
    })
    service = TestBed.get(VrgFormControlService)
    formBuilder = TestBed.get(FormBuilder)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
