import { Component, OnInit } from '@angular/core'
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms'

import { FieldModel } from '../models/field.model'
import { FieldTypeEnum } from '../enums/field-type.enum'

@Component({
  selector: 'vrg-page-example',
  templateUrl: './vrg-page-example.component.html',
  styleUrls: ['./vrg-page-example.component.scss'],
})
export class VrgPageExampleComponent implements OnInit {
  parentForm: FormGroup
  fields: FieldModel[]
  fieldType = FieldTypeEnum

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createFields()
    this.createForm()
    this.onChange()
  }

  onChange() {
    this.parentForm.valueChanges.subscribe(values => {
      console.log(values)
      console.log(this.parentForm.valid)
    })
  }

  private createFields() {
    this.fields = [
      {
        autofocus: true,
        name: 'name',
        controlName: 'name',
        type: this.fieldType.TEXT,
        id: 'name',
      },
      {
        autofocus: false,
        name: 'password',
        controlName: 'password',
        type: this.fieldType.PASSWORD,
        id: 'password',
      },
      {
        autofocus: false,
        name: 'age',
        controlName: 'age',
        type: this.fieldType.NUMBER,
        id: 'age',
        step: 5,
      },
    ]
  }

  createForm() {
    this.parentForm = this.fb.group({
      name: new FormControl('', [
        Validators['required'],
        Validators['minLength'](3),
        Validators['maxLength'](16),
      ]),
      password: new FormControl('', [
        Validators['required'],
        Validators['minLength'](8),
        Validators['maxLength'](20),
      ]),
      age: new FormControl(0, [
        Validators.required,
        Validators.min(0),
        Validators.max(100),
      ]),
    })
  }
}
