import { TestBed } from '@angular/core/testing'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'

import { VrgField } from 'src/app/interfaces'
import { VrgFieldType } from 'src/app/enums'
import { VrgFormBuilder } from './vrg-form-builder.service'

describe(`${VrgFormBuilder.name}`, () => {
  let service: VrgFormBuilder
  let formBuilder: FormBuilder

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      providers: [VrgFormBuilder, FormBuilder]
    })
    service = TestBed.get(VrgFormBuilder)
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
        validators: [Validators.required],
        disabled: true,
        type: VrgFieldType.TEXT
      }
    ]

    const reactiveForm = service.createReactiveForm(formModel)
    const formControl = reactiveForm.controller.get('testControl')

    expect(formControl.disabled).toBe(true)
  })
})
