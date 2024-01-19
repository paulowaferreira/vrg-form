import { Component, Input, OnInit } from '@angular/core'

import { VrgFieldBase } from '../../base-class/vrg-field-base.class'

@Component({
  selector: 'vrg-field-text',
  templateUrl: './vrg-field-text.component.html',
  styleUrls: ['./vrg-field-text.component.scss'],
})
export class VrgFieldTextComponent extends VrgFieldBase implements OnInit {
  @Input() value: string = ''

  ngOnInit() { }
}
