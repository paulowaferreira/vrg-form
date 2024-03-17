import { Component, Input, OnInit } from '@angular/core'

import { VrgFieldBaseComponent } from '../vrg-field-base/vrg-field-base.component'

@Component({
  selector: 'vrg-field-textarea',
  templateUrl: './vrg-field-textarea.component.html',
  styleUrls: ['./vrg-field-textarea.component.scss']
})
export class VrgFieldTextareaComponent extends VrgFieldBaseComponent implements OnInit {
  @Input() value: string = ''
  @Input() rows: number = 2
  @Input() cols: number = 20

  ngOnInit(): void {
    this.handleValueChange()
    this.handleCustomClassInput()
    this.buildCustomClass(this.customNgClassContainer, this.ngClassContainer)
    this.buildCustomClass(this.customNgClassLabel, this.ngClassLabel)
  }
}
