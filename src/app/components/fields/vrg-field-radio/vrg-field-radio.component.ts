import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

import { VrgFieldBase } from '../../base-class/vrg-field-base.class'

@Component({
  selector: 'vrg-field-radio',
  templateUrl: './vrg-field-radio.component.html',
  styleUrls: ['./vrg-field-radio.component.scss'],
})
export class VrgFieldRadioComponent extends VrgFieldBase implements OnInit {
  @Input() value: any
  @Input() options: { label: string, value: any }

  ngOnInit() { }
}
