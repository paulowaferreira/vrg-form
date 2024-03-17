import { Component, Input, OnInit } from '@angular/core'

import { VrgFieldBaseComponent } from '../vrg-field-base/vrg-field-base.component'

@Component({
  selector: 'vrg-field-phone',
  templateUrl: './vrg-field-phone.component.html',
  styleUrls: ['./vrg-field-phone.component.scss']
})
export class VrgFieldPhoneComponent extends VrgFieldBaseComponent implements OnInit {
  @Input() value: string = ''

  ngOnInit() {}
}
