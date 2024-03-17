import { Component, Input, OnInit } from '@angular/core'

import { VrgFieldType } from 'src/app/enums'
import { VrgFieldBaseComponent } from '../vrg-field-base/vrg-field-base.component'

@Component({
  selector: 'vrg-field-password',
  templateUrl: './vrg-field-password.component.html',
  styleUrls: ['./vrg-field-password.component.scss']
})
export class VrgFieldPasswordComponent extends VrgFieldBaseComponent implements OnInit {
  @Input() value: string = ''

  type = VrgFieldType
  showPassword: boolean = false
  passwordShowText: string = ''

  ngOnInit() {
    this.handlePasswordVisibilityText()
  }

  onShowPassword() {
    this.showPassword = !this.showPassword
    this.handlePasswordVisibilityText()
  }

  private handlePasswordVisibilityText() {
    this.passwordShowText = this.showPassword ? 'esconder' : 'mostrar'
  }
}
