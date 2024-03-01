import { Component, OnInit } from '@angular/core'

import { VrgFieldType } from '../enums'
import { VrgReactiveForm } from '../interfaces'
import { VrgFormBuilder } from '../services/vrg-form-builder/vrg-form-builder.service'
import { TEMPLATE_FORM_DATA } from '../templates/vrg-form-data/vrg-form-data.template'

@Component({
  selector: 'vrg-page-example',
  templateUrl: './vrg-page-example.component.html',
  styleUrls: ['./vrg-page-example.component.scss']
})
export class VrgPageExampleComponent implements OnInit {
  vrgForm: VrgReactiveForm
  fieldType = VrgFieldType

  constructor(private formService: VrgFormBuilder) {}

  ngOnInit() {
    this.createForm()
    this.onChange()
  }

  onChange() {
    this.vrgForm.controller.valueChanges.subscribe(values => {
      console.log(values, this.vrgForm.controller.valid)
    })
  }

  createForm() {
    this.vrgForm = 
      this.formService.createReactiveForm(TEMPLATE_FORM_DATA)
  }
}
