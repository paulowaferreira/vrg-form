import { Component, OnInit } from '@angular/core'

import { VrgFieldType } from '../enums'
import { VrgReactiveForm } from '../interfaces'
import { VrgFormService } from '../services/vrg-form/vrg-form.service'
import { TEMPLATE_FORM_DATA } from '../templates/vrg-form-data/vrg-form-data.template'
import { VrgFieldTextClassName } from '../enums/vrg-field-text-classname.enum'
@Component({
  selector: 'vrg-page-example',
  templateUrl: './vrg-page-example.component.html',
  styleUrls: ['./vrg-page-example.component.scss']
})
export class VrgPageExampleComponent implements OnInit {
  vrgForm: VrgReactiveForm
  fieldType = VrgFieldType
  textClassName = VrgFieldTextClassName
  classInput = {
    'className': 'batata',
    'cssFilePath': 'componente-pai.component.css'
  }

  constructor(private formService: VrgFormService) {}

  ngOnInit() {
    this.createForm()
    this.onChange()
  }

  onChange() {
    this.vrgForm.formGroup.valueChanges.subscribe(values => {
      console.log(values, 'form Valido: ', this.vrgForm.formGroup.valid)
    })
  }

  createForm() {
    this.vrgForm = this.formService.buildForm(TEMPLATE_FORM_DATA)
  }
}
