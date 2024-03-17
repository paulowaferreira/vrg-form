import { Component, Input, OnInit } from '@angular/core'

import { VrgFieldBaseComponent } from '../vrg-field-base/vrg-field-base.component'

@Component({
  selector: 'vrg-field-email',
  templateUrl: './vrg-field-email.component.html',
  styleUrls: ['./vrg-field-email.component.scss']
})
export class VrgFieldEmailComponent extends VrgFieldBaseComponent implements OnInit {
  @Input() value: string = ''

  ngOnInit() {}
}
