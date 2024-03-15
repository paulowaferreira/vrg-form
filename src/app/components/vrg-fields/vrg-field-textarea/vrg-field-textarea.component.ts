import { Component, Input, OnInit } from '@angular/core'

import { VrgFieldBase } from '../base-class/vrg-field-base.component'

@Component({
  selector: 'vrg-field-textarea',
  templateUrl: './vrg-field-textarea.component.html',
  styleUrls: ['./vrg-field-textarea.component.scss']
})
export class VrgFieldTextareaComponent extends VrgFieldBase implements OnInit {
  @Input() value: string = ''
  @Input() rows: number = 2
  @Input() cols: number = 20

  ngOnInit() {}
}
