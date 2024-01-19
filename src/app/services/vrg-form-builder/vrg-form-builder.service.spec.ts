import { TestBed } from '@angular/core/testing'
import { 
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators
} from '@angular/forms'

import { VrgFormBuilder } from './vrg-form-builder.service'
import { PropsModel } from '../../models'
import { FieldTypeEnum } from './../../enums/'

describe(`${VrgFormBuilder.name}`, () => {
  let service: VrgFormBuilder
  let formBuilder: FormBuilder

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      providers: [VrgFormBuilder, FormBuilder],
    })
    service = TestBed.get(VrgFormBuilder)
    formBuilder = TestBed.get(FormBuilder)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should create a form with disabled field', () => {
    const formModel: PropsModel[] = [
      {
        name: 'testControl',
        initialValue: '',
        validators: [ Validators.required ],
        disabled: true,
        type: FieldTypeEnum.TEXT,
      }
    ]

    const reactiveForm = service.createReactiveForm(formModel)
    const formControl = reactiveForm.reactiveController.get('testControl')

    expect(formControl.disabled).toBe(true)
  })
})
