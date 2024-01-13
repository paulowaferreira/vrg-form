import { TestBed } from '@angular/core/testing'
import { 
  FormBuilder,
  FormControl,
  ReactiveFormsModule
} from '@angular/forms'

import { VrgFormService } from './vrg-form-service.service'
import { FieldModel } from '../../models/field.model'
import { FieldTypeEnum } from '../../enums/field-type.enum'

describe(`${VrgFormService.name}`, () => {
  let service: VrgFormService
  let formBuilder: FormBuilder

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      providers: [VrgFormService, FormBuilder],
    })
    service = TestBed.get(VrgFormService)
    formBuilder = TestBed.get(FormBuilder)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should create a form with disabled field', () => {
    const formModel: FieldModel[] = [
      {
        control: {
          name: 'testControl',
          initialValue: '',
          validators: { required: true },
        },
        properties: {
          disabled: true,
          type: FieldTypeEnum.TEXT,
        },
      },
    ]

    const reactiveForm = service.createForm(formModel)
    const formControl = reactiveForm.parentForm.get('testControl')

    expect(formControl.disabled).toBeTruthy()
  })

  it('should disable a field', () => {
    const formControl = new FormControl()
    service.disableField(formControl)
    expect(formControl.disabled).toBeTruthy()
  })
})
