import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'vrg-label',
  templateUrl: './vrg-label.component.html',
  styleUrls: ['./vrg-label.component.scss']
})
export class VrgLabelComponent {
  @Input() fieldName: string
  @Input() text: string
}
