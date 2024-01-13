import { Component, OnInit } from '@angular/core'

import { FieldTypeEnum } from '../enums/field-type.enum'
import { ReactiveFormModel } from '../models/reactive-form.model'
import { VrgFormService } from '../services/vrg-form-service/vrg-form-service.service'

@Component({
  selector: 'vrg-page-example',
  templateUrl: './vrg-page-example.component.html',
  styleUrls: ['./vrg-page-example.component.scss'],
})
export class VrgPageExampleComponent implements OnInit {
  reactiveForm: ReactiveFormModel
  fieldType = FieldTypeEnum

  constructor(private vrgFormService: VrgFormService) {
  }
  
  ngOnInit() {
    this.createForm()
    this.onChange()
  }

  onChange() {
    this.reactiveForm.parentForm.valueChanges.subscribe(values => {
      console.log(values, this.reactiveForm.parentForm.valid)
    })
  }

  createForm() {
    this.reactiveForm = this.vrgFormService.buildReactiveForm([
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
          type: this.fieldType.TEXT,
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
          type: this.fieldType.PASSWORD,
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
          type: this.fieldType.NUMBER,
        }
      }
    ])
  }
}
