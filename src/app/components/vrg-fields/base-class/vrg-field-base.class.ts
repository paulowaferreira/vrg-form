import { EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'

export class VrgFieldBase implements OnInit, OnChanges {
  @Input() autocomplete: string
  @Input() autofocus: boolean = false
  @Input() control: FormControl
  @Input() controlName: string
  @Input() disabled: boolean = false
  @Input() errorClass: string
  @Input() formGroup: FormGroup
  @Input() id: string
  @Input() isFilled: boolean = true
  @Input() labelText: string
  @Input() name: string
  @Input() classLabel: string = ''
  @Input() styleLabel: string = ''
  @Input() classContainer: string = ''
  @Input() styleContainer: string = ''
  @Input() styleInput: string = ''
  @Input() placeholder: string = ''
  @Input() readOnly: boolean = false
  @Input() required: boolean = false
  @Input() spellcheck: boolean
  @Input() tabindex: number

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
  @Output() mouseOver: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>()
  @Output() mouseOut: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>()
  @Output() mouseEnter: EventEmitter<MouseEvent> =
    new EventEmitter<MouseEvent>()
  @Output() mouseLeave: EventEmitter<MouseEvent> =
    new EventEmitter<MouseEvent>()

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

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
