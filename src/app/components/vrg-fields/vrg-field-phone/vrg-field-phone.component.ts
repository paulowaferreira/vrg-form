import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'vrg-field-phone',
  templateUrl: './vrg-field-phone.component.html',
  styleUrls: ['./vrg-field-phone.component.scss']
})
export class VrgFieldPhoneComponent implements OnInit {
  @Input() value: string = ''

  ngOnInit() {}
}
