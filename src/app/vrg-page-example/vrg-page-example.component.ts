import { Component, OnInit } from '@angular/core'

import { FieldTypeEnum } from '../enums'
import { VrgFormModel } from '../models'
import { VrgFieldTemplatesService, VrgFormService } from '../services'

@Component({
  selector: 'vrg-page-example',
  templateUrl: './vrg-page-example.component.html',
  styleUrls: ['./vrg-page-example.component.scss'],
})
export class VrgPageExampleComponent implements OnInit {
  vrgForm: VrgFormModel
  fieldType = FieldTypeEnum

  constructor(
    private formService: VrgFormService,
    private fieldService: VrgFieldTemplatesService
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
  }
}
