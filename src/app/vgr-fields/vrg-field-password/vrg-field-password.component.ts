import { Component, Input, OnInit } from '@angular/core'
import { FormGroup } from '@angular/forms'

import { FieldTypeEnum } from '../../enums/field-type.enum'
import { VrgFieldBase } from '../base-class/vrg-field-base.class'

@Component({
  selector: 'vrg-field-password',
  templateUrl: './vrg-field-password.component.html',
  styleUrls: ['./vrg-field-password.component.scss'],
})
export class VrgFieldPasswordComponent extends VrgFieldBase implements OnInit {
  @Input() value = ''

  type = FieldTypeEnum
  showPassword = false
  passwordShowText = ''

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
