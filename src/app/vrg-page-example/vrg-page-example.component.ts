import { Component, OnInit } from '@angular/core'

import { FieldTypeEnum } from '../enums'
import { VrgFormModel } from '../models'
import { VrgFormBuilder } from '../services/vrg-form-builder/vrg-form-builder.service'
import { EXAMPLE_DEFAULT_FORM_DATA } from './config/vrg-page-example-form-data.config'

@Component({
  selector: 'vrg-page-example',
  templateUrl: './vrg-page-example.component.html',
  styleUrls: ['./vrg-page-example.component.scss']
})
export class VrgPageExampleComponent implements OnInit {
  vrgForm: VrgFormModel
  fieldType = FieldTypeEnum

  constructor(private formService: VrgFormBuilder) {}

  ngOnInit() {
    this.createForm()
    this.onChange()
  }

  onChange() {
    this.vrgForm.reactiveController.valueChanges.subscribe(values => {
      console.log(values, this.vrgForm.reactiveController.valid)
    })
  }

  createForm() {
    this.vrgForm = this.formService.createReactiveForm(
      EXAMPLE_DEFAULT_FORM_DATA
    )
  }
}
