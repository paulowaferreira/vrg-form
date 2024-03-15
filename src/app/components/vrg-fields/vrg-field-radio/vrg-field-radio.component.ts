import { Component, Input, OnInit } from '@angular/core'

import { VrgFieldOption } from 'src/app/interfaces'
import { VrgFieldBase } from '../base-class/vrg-field-base.component'

@Component({
  selector: 'vrg-field-radio',
  templateUrl: './vrg-field-radio.component.html',
  styleUrls: ['./vrg-field-radio.component.scss']
})
export class VrgFieldRadioComponent extends VrgFieldBase implements OnInit {
  @Input() value: any
  @Input() options: VrgFieldOption[]

  ngOnInit() {}
}
