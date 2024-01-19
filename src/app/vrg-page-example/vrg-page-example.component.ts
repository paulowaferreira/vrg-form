import { Component, OnInit } from '@angular/core'

import { FieldTypeEnum } from '../enums/field-type.enum'
import { VrgFormModel } from '../models/reactive-form.model'
import { VrgFormService } from '../services/vrg-form-service/vrg-form-service.service'
import { VrgFieldTemplatesService } from '../services/vrg-field-templates-service/vrg-field-templates.service'
import { FormControl, Validators } from '@angular/forms'
import { VrgFieldTextService } from '../services/vrg-fields'
import { FormControllerItemModel } from '../models/form-controller-item.model'

@Component({
  selector: 'vrg-page-example',
  templateUrl: './vrg-page-example.component.html',
  styleUrls: ['./vrg-page-example.component.scss'],
})
export class VrgPageExampleComponent implements OnInit {
  vrgForm: VrgFormModel
  fieldType = FieldTypeEnum
  control: FormControllerItemModel

  constructor(
    private formService: VrgFormService,
    private fieldService: VrgFieldTemplatesService,
    private textService: VrgFieldTextService
  ) {
  }
  
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
    this.vrgForm = 
      this.formService.createForm(this.fieldService.getFormDefault())
    this.vrgForm.fields[0].placeholder = 'teste aqui'
  }
}
