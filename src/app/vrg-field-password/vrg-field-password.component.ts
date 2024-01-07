import { Component, Input, OnInit } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { FieldTypeEnum } from '../enums/field-type.enum'

@Component({
  selector: 'vrg-field-password',
  templateUrl: './vrg-field-password.component.html',
  styleUrls: ['./vrg-field-password.component.scss'],
})
export class VrgFieldPasswordComponent implements OnInit {
  @Input() autofocus: boolean
  @Input() ngClass: string
  @Input() ngStyle: string
  @Input() controlName: string
  @Input() id: string
  @Input() name: string
  @Input() parentForm: FormGroup
  @Input() placeholder: string

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
