import { Component, Input, OnInit } from '@angular/core'

import { VrgFieldBase } from '../base-class/vrg-field-base.class'

@Component({
  selector: 'vrg-field-radio',
  templateUrl: './vrg-field-radio.component.html',
  styleUrls: ['./vrg-field-radio.component.scss'],
})
export class VrgFieldRadioComponent extends VrgFieldBase implements OnInit {
  @Input() value: string = ''

  ngOnInit() { }
}
