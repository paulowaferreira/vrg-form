import { Component, Input, OnInit } from '@angular/core'

import { VrgFieldOption } from 'src/app/interfaces'

@Component({
  selector: 'vrg-field-dropdown',
  templateUrl: './vrg-field-dropdown.component.html',
  styleUrls: ['./vrg-field-dropdown.component.scss']
})
export class VrgFieldDropdownComponent implements OnInit {
  @Input() value: any
  @Input() options: VrgFieldOption[]

  ngOnInit() {}
}
