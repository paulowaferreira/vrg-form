import { VrgField } from 'src/app/interfaces'

import { DEFAULT_PASSWORD_PROPS, DEFAULT_PASSWORD_VALIDATORS } from '../vrg-field-password/default.template'
import { DEFAULT_TEXT_PROPS, DEFAULT_TEXT_VALIDATORS } from '../vrg-field-text/default.template'
import { DEFAULT_TEXTAREA_PROPS, DEFAULT_TEXTAREA_VALIDATORS } from '../vrg-field-textarea/default.template'
import { DEFAULT_NUMBER_PROPS, DEFAULT_NUMBER_VALIDATORS } from '../vrg-field-number/default.template'
import { DEFAULT_EMAIL_PROPS, DEFAULT_EMAIL_VALIDATORS } from '../vrg-field-email/default.template'
import { DEFAULT_PHONE_PROPS, DEFAULT_PHONE_VALIDATORS } from '../vrg-field-phone/default.template'
import { DEFAULT_RADIO_PROPS, DEFAULT_RADIO_VALIDATORS } from '../vrg-field-radio/default.template'

export const TEMPLATE_FORM_DATA: VrgField[] = [
  {
    ...DEFAULT_TEXT_PROPS,
    validators: DEFAULT_TEXT_VALIDATORS,
    autofocus: true,
    controlName: 'name',
    id: 'name',
    name: 'name',
    placeholder: 'Digite seu nome',
    labelText: 'Nome',
    disabled: false
  },
  {
    ...DEFAULT_TEXT_PROPS,
    validators: DEFAULT_TEXT_VALIDATORS,
    autofocus: true,
    controlName: 'lastname',
    id: 'lastname',
    name: 'lastname',
    placeholder: 'Digite seu sobrenome',
    labelText: 'Sobrenome',
    disabled: true
  },
  {
    ...DEFAULT_NUMBER_PROPS,
    validators: DEFAULT_NUMBER_VALIDATORS,
    controlName: 'age',
    id: 'age',
    name: 'age',
    step: 5,
    placeholder: 'Sua idade',
    labelText: 'Idade'
  },
  {
    ...DEFAULT_PASSWORD_PROPS,
    validators: DEFAULT_PASSWORD_VALIDATORS,
    controlName: 'password',
    id: 'password',
    name: 'password',
    labelText: 'Senha',
    placeholder: 'Digite sua senha'
  },
  {
    ...DEFAULT_TEXTAREA_PROPS,
    validators: DEFAULT_TEXTAREA_VALIDATORS,
    controlName: 'about',
    id: 'about',
    name: 'about',
    labelText: 'Bio',
    placeholder: 'Escreva um pouco sobre voce'
  },
  {
    ...DEFAULT_PHONE_PROPS,
    validators: DEFAULT_PHONE_VALIDATORS,
    controlName: 'phone',
    id: 'phone',
    placeholder: '(DDD) 9XXXXXXXX',
    name: 'phone',
    labelText: 'Celular'
  },
  {
    ...DEFAULT_EMAIL_PROPS,
    validators: DEFAULT_EMAIL_VALIDATORS,
    controlName: 'email',
    id: 'email',
    name: 'email',
    labelText: 'Email',
    placeholder: 'seuemail@dominio.com'
  },
  {
    ...DEFAULT_RADIO_PROPS,
    validators: DEFAULT_RADIO_VALIDATORS,
    controlName: 'question',
    id: 'question',
    name: 'question',
    labelText: 'O que achou do novo form?',
    options: [
      { label: 'Excelente', value: 4 },
      { label: 'Bom', value: 3 },
      { label: 'Mais ou menos', value: 2 },
      { label: 'Insatisfeito', value: 1 }
    ]
  },
  // {
  //   ...DEFAULT_DROPDOWN_PROPS,
  //   validators: DEFAULT_DROPDOWN_VALIDATORS,
  //   fieldControlName: 'rating',
  //   id: 'rating',
  //   name: 'rating',
  //   options: [
  //     { label: 'Excelente', value: 4 },
  //     { label: 'Bom', value: 3 },
  //     { label: 'Regular', value: 2 },
  //     { label: 'Ruim', value: 1 }
  //   ]
  // }
]
