import { TestBed } from '@angular/core/testing'
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms'

import { VrgFieldType } from 'src/app/enums'
import { VrgField, VrgReactiveForm } from 'src/app/interfaces'
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

  it('should build a form with given fields', () => {
    const fields: VrgField[] = [
      {
        controlName: 'name',
        initialValue: '',
        validators: { required: true },
        type: VrgFieldType.TEXT
      },
      {
        controlName: 'email',
        initialValue: '',
        validators: { required: true, email: true },
        type: VrgFieldType.TEXT
      }
    ]
    const result: VrgReactiveForm = service.buildForm(fields)
    expect(result.formGroup instanceof FormGroup).toBeTruthy()
    expect(result.fields.length).toEqual(2)
    expect(result.formGroup.controls['name']).toBeDefined()
    expect(result.formGroup.controls['email']).toBeDefined()
  })

  it('should disable form control if field is disabled', () => {
    const fields: VrgField[] = [
      {
        controlName: 'name',
        initialValue: '',
        validators: { required: true },
        disabled: true,
        type: VrgFieldType.TEXT
      }
    ]
    const result: VrgReactiveForm = service.buildForm(fields)
    expect(result.formGroup.controls['name'].disabled).toBeTruthy()
  })

  it('should add validators to form control', () => {
    const fields: VrgField[] = [
      {
        controlName: 'name',
        initialValue: '',
        validators: { required: true },
        type: VrgFieldType.TEXT
      },
      {
        controlName: 'age',
        initialValue: '',
        validators: { min: 18, max: 65 },
        type: VrgFieldType.TEXT
      }
    ]
    const result: VrgReactiveForm = service.buildForm(fields)
    expect(result.formGroup.controls['name'].validator).toBeDefined()
    expect(result.formGroup.controls['age'].validator).toBeDefined()
  })
})
