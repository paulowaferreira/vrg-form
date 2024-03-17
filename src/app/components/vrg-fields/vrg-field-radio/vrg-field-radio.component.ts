import { Component, Input, OnInit } from '@angular/core'

import { VrgFieldOption } from 'src/app/interfaces'
import { VrgFieldBaseComponent } from '../vrg-field-base/vrg-field-base.component'

@Component({
  selector: 'vrg-field-radio',
  templateUrl: './vrg-field-radio.component.html',
  styleUrls: ['./vrg-field-radio.component.scss']
})
export class VrgFieldRadioComponent extends VrgFieldBaseComponent implements OnInit {
  @Input() value: any
  @Input() options: VrgFieldOption[]

  ngOnInit() {}
}
