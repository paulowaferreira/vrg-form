import { Component, Input, OnInit } from '@angular/core'

import { VrgFieldBase } from '../base-class/vrg-field-base.component'

@Component({
  selector: 'vrg-field-email',
  templateUrl: './vrg-field-email.component.html',
  styleUrls: ['./vrg-field-email.component.scss']
})
export class VrgFieldEmailComponent extends VrgFieldBase implements OnInit {
  @Input() value: string = ''

  ngOnInit() {}
}
