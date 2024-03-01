import { Component, Input, OnInit } from '@angular/core'

import { VrgFieldBase } from '../base-class/vrg-field-base.class'

@Component({
  selector: 'vrg-field-phone',
  templateUrl: './vrg-field-phone.component.html',
  styleUrls: ['./vrg-field-phone.component.scss']
})
export class VrgFieldPhoneComponent extends VrgFieldBase implements OnInit {
  @Input() value: string = ''

  ngOnInit() {}
}
