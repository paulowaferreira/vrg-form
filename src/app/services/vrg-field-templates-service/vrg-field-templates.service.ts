import { Injectable } from '@angular/core'
import {
  VrgFieldEmailService,
  VrgFieldNumberService,
  VrgFieldPasswordService,
  VrgFieldPhoneService,
  VrgFieldTextService,
  VrgFieldTextareaService,
} from '../vrg-fields'

@Injectable({ providedIn: 'root' })
export class VrgFieldTemplatesService {

  constructor(
    private textService: VrgFieldTextService,
    private numberService: VrgFieldNumberService,
    private passwordService: VrgFieldPasswordService,
    private textareaService: VrgFieldTextareaService,
    private phoneService: VrgFieldPhoneService,
    private emailService: VrgFieldEmailService,
  ) {}

  getFormDefault() {
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
      }
    ]
  }
}
