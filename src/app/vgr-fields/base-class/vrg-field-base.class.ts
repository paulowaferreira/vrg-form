import { EventEmitter, Input, Output } from '@angular/core'

import { FormGroup } from '@angular/forms'

export class VrgFieldBase {
  @Input() autocomplete: string
  @Input() autofocus: boolean
  @Input() disabled: boolean
  @Input() controlName: string
  @Input() id: string
  @Input() name: string
  @Input() ngClass: string
  @Input() ngStyle: string
  @Input() parentForm: FormGroup
  @Input() placeholder: string
  @Input() readOnly: boolean
  @Input() spellcheck: boolean
  @Input() tabindex: number
  @Input() value: any

  @Output() blur: EventEmitter<any> = new EventEmitter<any>()
  @Output() change: EventEmitter<any> = new EventEmitter<any>()
  @Output() focus: EventEmitter<FocusEvent> = new EventEmitter<FocusEvent>()
  @Output() keyup: EventEmitter<KeyboardEvent> =
    new EventEmitter<KeyboardEvent>()
  @Output() input: EventEmitter<Event> = new EventEmitter<Event>()
  @Output() search: EventEmitter<any> = new EventEmitter<any>()
  @Output() submit: EventEmitter<any> = new EventEmitter<any>()
  @Output() click: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>()
  @Output() doubleClick: EventEmitter<MouseEvent> =
    new EventEmitter<MouseEvent>()
  @Output() mouseOver: EventEmitter<MouseEvent> =
    new EventEmitter<MouseEvent>()
  @Output() mouseOut: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>()
  @Output() mouseEnter: EventEmitter<MouseEvent> =
    new EventEmitter<MouseEvent>()
  @Output() mouseLeave: EventEmitter<MouseEvent> =
    new EventEmitter<MouseEvent>()

  onBlur(event: FocusEvent) {
    this.blur.emit(event)
  }

  onChange(event: Event) {
    this.change.emit(event)
  }

  onFocus(event: FocusEvent) {
    this.focus.emit(event)
  }

  onInput(event: Event) {
    this.input.emit(event)
  }

  onKeyup(event: KeyboardEvent) {
    this.keyup.emit(event)
  }

  onKeyDown(event: KeyboardEvent) {
    this.keyup.emit(event)
  }

  onSearch(event: Event) {
    this.search.emit(event)
  }

  onSubmit(event: Event) {
    this.submit.emit(event)
  }

  onClick(event: MouseEvent) {
    this.click.emit(event)
  }

  onDoubleClick(event: MouseEvent) {
    this.doubleClick.emit(event)
  }

  onMouseOver(event: MouseEvent) {
    this.mouseOver.emit(event)
  }

  onMouseOut(event: MouseEvent) {
    this.mouseOut.emit(event)
  }

  onMouseEnter(event: MouseEvent) {
    this.mouseEnter.emit(event)
  }

  onMouseLeave(event: MouseEvent) {
    this.mouseLeave.emit(event)
  }
}
