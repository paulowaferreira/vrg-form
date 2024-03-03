import { TestBed } from '@angular/core/testing'
import { FormBuilder, ReactiveFormsModule } from '@angular/forms'

import { VrgFieldService } from './vrg-field.service'

describe(`${VrgFieldService.name}`, () => {
  let service: VrgFieldService
  let formBuilder: FormBuilder

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      providers: [VrgFieldService, FormBuilder]
    })
    service = TestBed.get(VrgFieldService)
    formBuilder = TestBed.get(FormBuilder)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
