import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

import { VrgFieldBase } from '../../base-class/vrg-field-base.class'
import { FieldOptionsModel } from 'src/app/models'

@Component({
  selector: 'vrg-field-dropdown',
  templateUrl: './vrg-field-dropdown.component.html',
  styleUrls: ['./vrg-field-dropdown.component.scss'],
})
export class VrgFieldDropdownComponent extends VrgFieldBase implements OnInit {
  @Input() value: any
  @Input() options: FieldOptionsModel[]

  ngOnInit() { }
}
