import { VrgField } from "src/app/interfaces";
import { DEFAULT_TEXT_PROPS, DEFAULT_TEXT_VALIDATORS } from "../vrg-field-text/default.template";

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
  // {
  //   ...DEFAULT_TEXT_PROPS,
  //   validators: DEFAULT_TEXT_VALIDATORS,
  //   autofocus: true,
  //   fieldControlName: 'lastname',
  //   id: 'lastname',
  //   name: 'lastname',
  //   placeholder: 'Digite seu sobrenome',
  //   labelText: 'Sobrenome',
  //   disabled: true
  // },
  // {
  //   ...DEFAULT_NUMBER_PROPS,
  //   validators: DEFAULT_NUMBER_VALIDATORS,
  //   fieldControlName: 'age',
  //   id: 'age',
  //   name: 'age',
  //   step: 5
  // },
  // {
  //   ...DEFAULT_PASSWORD_PROPS,
  //   validators: DEFAULT_PASSWORD_VALIDATORS,
  //   fieldControlName: 'password',
  //   id: 'password',
  //   name: 'password'
  // },
  // {
  //   ...DEFAULT_TEXTAREA_PROPS,
  //   validators: DEFAULT_TEXTAREA_VALIDATORS,
  //   fieldControlName: 'about',
  //   id: 'about',
  //   name: 'about',
  //   placeholder: 'Escreva um pouco sobre voce'
  // },
  // {
  //   ...DEFAULT_PHONE_PROPS,
  //   validators: DEFAULT_PHONE_VALIDATORS,
  //   fieldControlName: 'phone',
  //   id: 'phone',
  //   placeholder: 'Celular',
  //   name: 'phone'
  // },
  // {
  //   ...DEFAULT_EMAIL_PROPS,
  //   validators: DEFAULT_EMAIL_VALIDATORS,
  //   fieldControlName: 'email',
  //   id: 'email',
  //   name: 'email',
  //   placeholder: 'seuemail@dominio.com'
  // },
  // {
  //   ...DEFAULT_RADIO_PROPS,
  //   validators: DEFAULT_RADIO_VALIDATORS,
  //   fieldControlName: 'question',
  //   id: 'question',
  //   name: 'question',
  //   options: [
  //     { label: 'Sim', value: true },
  //     { label: 'Não', value: false }
  //   ]
  // },
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
