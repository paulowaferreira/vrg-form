import { Component, Input, OnInit } from '@angular/core'

import { VrgFieldBaseComponent } from '../vrg-field-base/vrg-field-base.component'

@Component({
  selector: 'vrg-field-number',
  templateUrl: './vrg-field-number.component.html',
  styleUrls: ['./vrg-field-number.component.scss']
})
export class VrgFieldNumberComponent extends VrgFieldBaseComponent implements OnInit {
  @Input() value: number = 0
  @Input() step: number

  ngOnInit() {
    this.checkPlaceholder()
  }

  checkPlaceholder() {
    if (!this.placeholder) this.placeholder = ''
  }
}
