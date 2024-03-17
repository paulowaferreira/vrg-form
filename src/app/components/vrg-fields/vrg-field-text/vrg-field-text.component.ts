import { Component, OnInit, ViewEncapsulation } from '@angular/core'

import { VrgFieldBaseComponent } from '../vrg-field-base/vrg-field-base.component'

@Component({
  selector: 'vrg-field-text',
  templateUrl: './vrg-field-text.component.html',
  styleUrls: ['./vrg-field-text.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VrgFieldTextComponent extends VrgFieldBaseComponent implements OnInit {
  ngOnInit(): void {
    this.handleValueChange()
    this.handleCustomClassInput()
    this.buildCustomClass(this.customNgClassContainer, this.ngClassContainer)
    this.buildCustomClass(this.customNgClassLabel, this.ngClassLabel)
  }
}
