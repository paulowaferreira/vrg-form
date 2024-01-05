import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'vrg-field-number',
  templateUrl: './vrg-field-number.component.html',
  styleUrls: ['./vrg-field-number.component.scss']
})
export class VrgFieldNumberComponent implements OnInit {
  @Input() autofocus: boolean
  @Input() ngClass: string
  @Input() ngStyle: string
  @Input() controlName: string
  @Input() id: string
  @Input() name: string
  @Input() step: number
  @Input() parentForm: FormGroup
  @Input() placeholder: string

  ngOnInit(): void {
      
  }
}
