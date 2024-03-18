import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'vrg-label',
  templateUrl: './vrg-label.component.html',
  styleUrls: ['./vrg-label.component.scss']
})
export class VrgLabelComponent {
  @Input() customNgClass: string = ''
  @Input() fieldName: string = ''
  @Input() isRequired: boolean = false
  @Input() text: string = ''
}
