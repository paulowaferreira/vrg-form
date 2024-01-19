import { Injectable } from '@angular/core'

import { VrgFieldTextService } from '../vrg-fields-templates/vrg-field-text/vrg-field-text.service'
import { VrgFieldNumberService } from '../vrg-fields-templates/vrg-field-number/vrg-field-number.service'
import { VrgFieldPasswordService } from '../vrg-fields-templates/vrg-field-password/vrg-field-password.service'
import { VrgFieldTextareaService } from '../vrg-fields-templates/vrg-field-textarea/vrg-field-textarea.service'
import { VrgFieldPhoneService } from '../vrg-fields-templates/vrg-field-phone/vrg-field-phone.service'
import { VrgFieldEmailService } from '../vrg-fields-templates/vrg-field-email/vrg-field-email.service'
import { VrgFieldRadioService } from '../vrg-fields-templates/vrg-field-radio/vrg-field-radio.service'
import { VrgFieldDropdownService } from '../vrg-fields-templates/vrg-field-dropdown/vrg-field-dropdown.service'
import { PropsModel } from '../../models'

@Injectable({ providedIn: 'root' })
export class VrgFieldTemplatesService {

  constructor(
    private textService: VrgFieldTextService,
    private numberService: VrgFieldNumberService,
    private passwordService: VrgFieldPasswordService,
    private textareaService: VrgFieldTextareaService,
    private phoneService: VrgFieldPhoneService,
    private emailService: VrgFieldEmailService,
    private radioService: VrgFieldRadioService,
    private dropdownService: VrgFieldDropdownService
  ) {}

  getFormDefaultValues(): PropsModel[] {
    return [
      {
        ...this.textService.getDefaultValues(),
        autofocus: true,
        controlName: 'name',
        id: 'name',
        name: 'name',
        placeholder: 'seu nome aqui',
      },
      {
        ...this.numberService.getDefaultValues(),
        autofocus: false,
        controlName: 'age',
        id: 'age',
        name: 'age',
        step: 5,
      },
      {
        ...this.passwordService.getDefaultValues(),
        autofocus: false,
        controlName: 'password',
        id: 'password',
        name: 'password'
      },
      {
        ...this.textareaService.getDefaultValues(),
        autofocus: false,
        controlName: 'about',
        id: 'about',
        name: 'about',
        placeholder: 'Escreva um pouco sobre voce',
      },
      {
        ...this.phoneService.getDefaultValues(),
        autofocus: false,
        controlName: 'phone',
        id: 'phone',
        placeholder: 'Celular',
        name: 'phone',
      },
      {
        ...this.emailService.getDefaultValues(),
        autocomplete: true,
        controlName: 'email',
        id: 'email',
        name: 'email',
        placeholder: 'seuemail@dominio.com',
      },
      {
        ...this.radioService.getDefaultValues(),
        controlName: 'question',
        id: 'question',
        name: 'question',
        options: [
          { label: 'Sim', value: true},
          { label: 'Não', value: false}
        ]
      },
      {
        ...this.dropdownService.getDefaultValues(),
        controlName: 'rating',
        id: 'rating',
        name: 'rating',
        options: [
          { label: 'Excelente', value: 4},
          { label: 'Bom', value: 3},
          { label: 'Regular', value: 2},
          { label: 'Ruim', value: 1}
        ]
      }
    ]
  }
}
