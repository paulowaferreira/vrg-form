import { TestBed } from '@angular/core/testing'
import { FormBuilder, ReactiveFormsModule } from '@angular/forms'

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

  it('should build reactive form correctly', () => {
    const fieldModel: FieldModel[] = [
      {
        control: {
          name: 'name',
          initialValue: '',
          validators: {
            required: true,
            maxLength: 50,
            minLength: 4
          }
        },
        properties: {
          autofocus: true,
          controlName: 'name',
          id: 'name',
          type: FieldTypeEnum.TEXT,
        }
      },
      {
        control: {
          name: 'password',
          initialValue: '',
          validators: {
            required: true,
            minLength: 8,
            maxLength: 20,
          }
        },
        properties: {
          autofocus: false,
          controlName: 'password',
          id: 'password',
          type: FieldTypeEnum.PASSWORD,
        }
      },
      {
        control: {
          name: 'age',
          initialValue: 0,
          validators: {
            required: true,
            min: 1,
            max: 150,
          },
        },
        properties: {
          autofocus: false,
          controlName: 'age',
          id: 'age',
          step: 5,
          type: FieldTypeEnum.NUMBER,
        }
      }
    ]

    const reactiveForm = service.buildReactiveForm(fieldModel)

    expect(reactiveForm.parentForm.get('name')).toBeTruthy()
    expect(reactiveForm.parentForm.get('age')).toBeTruthy()
    expect(reactiveForm.parentForm.get('password')).toBeTruthy()
    expect(reactiveForm.fieldProperties.length).toBe(3)
  })
})
