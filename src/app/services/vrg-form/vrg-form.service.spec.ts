import { TestBed } from '@angular/core/testing'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'

import { VrgField } from 'src/app/interfaces'
import { VrgFieldType } from 'src/app/enums'
import { VrgFormService } from './vrg-form.service'

describe(`${VrgFormService.name}`, () => {
  let service: VrgFormService
  let formBuilder: FormBuilder

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      providers: [VrgFormService, FormBuilder]
    })
    service = TestBed.get(VrgFormService)
    formBuilder = TestBed.get(FormBuilder)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should create a form with disabled field', () => {
    const formModel: VrgField[] = [
      {
        name: 'testControl',
        initialValue: '',
        validators: {required: true},
        disabled: true,
        type: VrgFieldType.TEXT
      }
    ]

    const reactiveForm = service.buildForm(formModel)
    const formControl = reactiveForm.formGroup.get('testControl')

    expect(formControl.disabled).toBe(true)
  })
})
