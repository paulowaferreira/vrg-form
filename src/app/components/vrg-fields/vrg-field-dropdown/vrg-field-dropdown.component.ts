import { Component, Input, OnInit } from '@angular/core'

import { VrgFieldOption } from 'src/app/interfaces'
import { VrgFieldBaseComponent } from '../vrg-field-base/vrg-field-base.component'

@Component({
  selector: 'vrg-field-dropdown',
  templateUrl: './vrg-field-dropdown.component.html',
  styleUrls: ['./vrg-field-dropdown.component.scss']
})
export class VrgFieldDropdownComponent extends VrgFieldBaseComponent implements OnInit {
  @Input() value: any
  @Input() options: VrgFieldOption[]

  ngOnInit() {}
}
