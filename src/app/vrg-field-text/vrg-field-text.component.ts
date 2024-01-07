import { Component, Input, OnInit } from '@angular/core'
import { FormGroup } from '@angular/forms'

@Component({
  selector: 'vrg-field-text',
  templateUrl: './vrg-field-text.component.html',
  styleUrls: ['./vrg-field-text.component.scss'],
})
export class VrgFieldTextComponent implements OnInit {
  @Input() autofocus: boolean
  @Input() ngClass: string
  @Input() ngStyle: string
  @Input() controlName: string
  @Input() id: string
  @Input() name: string
  @Input() parentForm: FormGroup
  @Input() placeholder: string

  ngOnInit() { }
}
