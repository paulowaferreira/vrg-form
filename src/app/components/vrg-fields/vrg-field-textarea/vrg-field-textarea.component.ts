import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core'
import { FormGroup } from '@angular/forms'

import { VrgFieldValidationError } from 'src/app/interfaces/vrg-field-validator-error.interface'
import { VrgFieldErrorService } from 'src/app/services/vrg-field-error/vrg-field-error.service'


@Component({
  selector: 'vrg-field-textarea',
  templateUrl: './vrg-field-textarea.component.html',
  styleUrls: ['./vrg-field-textarea.component.scss']
})
export class VrgFieldTextareaComponent implements OnChanges {
  @Input() value: string = ''
  @Input() rows: number = 2
  @Input() cols: number = 20
  @Input() autocomplete: string
  @Input() autofocus: boolean = false
  @Input() controlName: string
  @Input() customNgClassContainer: string
  @Input() customNgClassInput: string
  @Input() customNgClassLabel: string
  @Input() disabled: boolean = false
  @Input() errorClass: string
  @Input() formGroup: FormGroup
  @Input() id: string
  @Input() isFilled: boolean = true
  @Input() labelText: string
  @Input() name: string
  @Input() placeholder: string = ''
  @Input() readOnly: boolean = false
  @Input() required: boolean = false
  @Input() spellcheck: boolean
  @Input() tabindex: number

  @Output() blur: EventEmitter<FocusEvent> = new EventEmitter<FocusEvent>()
  @Output() change: EventEmitter<Event> = new EventEmitter<Event>()
  @Output() focus: EventEmitter<FocusEvent> = new EventEmitter<FocusEvent>()
  @Output() keyup: EventEmitter<KeyboardEvent> =
    new EventEmitter<KeyboardEvent>()
  @Output() input: EventEmitter<Event> = new EventEmitter<Event>()
  @Output() search: EventEmitter<Event> = new EventEmitter<Event>()
  @Output() submit: EventEmitter<Event> = new EventEmitter<Event>()
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

  error: VrgFieldValidationError
  ngClassContainer: Object = {}
  ngClassInput: Object = {}
  ngClassLabel: Object = {}

  constructor(
    private fieldService: VrgFieldErrorService,
    private elementRef: ElementRef
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.handleFormGroupChanges(changes)
    this.handleCustomClassInput()
    this.handleCustomNgClassContainerChanges(changes)
    this.handleCustomNgClassLabelChanges(changes)
  }

  buildCustomClass(customNgClasses: string, ngClasses: Object): Object {
    if (!customNgClasses) return {} as Object
    (customNgClasses.split(' ') as string[]).forEach(customClass => {
      ngClasses = {
        ...ngClasses,
        [customClass]: true
      }
    })
    return ngClasses
  }

  handleCustomClassInput(): void {
    this.ngClassInput =
      this.buildCustomClass(this.customNgClassInput, this.ngClassInput)
  }

  handleCustomNgClassContainerChanges(changes: SimpleChanges): void {
    if (
      changes['customNgClassContainer']
      && changes['customNgClassContainer'].currentValue
    ) {
      this.buildCustomClass(this.customNgClassContainer, this.ngClassContainer)
    }
  }

  handleCustomNgClassLabelChanges(changes: SimpleChanges): void {
    if (
      changes['customNgClassLabel']
      && changes['customNgClassLabel'].currentValue
    ) {
      this.buildCustomClass(this.customNgClassLabel, this.ngClassLabel)
    }
  }

  handleFormGroupChanges(changes: SimpleChanges): void {
    if (
      changes['formGroup']
      && changes['formGroup'].currentValue
      && changes['controlName']
      && changes['controlName'].currentValue
    ) {
      this.updateFormGroup(
        changes['formGroup'].currentValue,
        changes['controlName'].currentValue
      )
    }
  }

  handleValueChange(): void {
    const control = this.formGroup.get(this.controlName)
    if (control) {
      control.valueChanges.subscribe(value => {
        this.isFilled = !!value
        this.error = this.fieldService.getFormErrors(
          this.formGroup.get(this.controlName),
          this.elementRef
        )
      })
    }
  }

  onBlur(event: FocusEvent): void {
    this.blur.emit(event)
  }

  onClick(event: MouseEvent): void {
    this.click.emit(event)
  }

  onChange(event: Event): void {
    this.change.emit(event)
  }

  onDoubleClick(event: MouseEvent): void {
    this.doubleClick.emit(event)
  }

  onFocus(event: FocusEvent): void {
    this.focus.emit(event)
  }

  onInput(event: Event): void {
    this.input.emit(event)
  }

  onKeyDown(event: KeyboardEvent): void {
    this.keyup.emit(event)
  }

  onKeyup(event: KeyboardEvent): void {
    this.keyup.emit(event)
  }

  onMouseEnter(event: MouseEvent): void {
    this.mouseEnter.emit(event)
  }

  onMouseLeave(event: MouseEvent): void {
    this.mouseLeave.emit(event)
  }

  onMouseOut(event: MouseEvent): void {
    this.mouseOut.emit(event)
  }

  onMouseOver(event: MouseEvent): void {
    this.mouseOver.emit(event)
  }

  onSubmit(event: Event): void {
    this.submit.emit(event)
  }

  onSearch(event: Event): void {
    this.search.emit(event)
  }

  updateFormGroup(formGroup: FormGroup, controlName: string): void {
    this.formGroup = formGroup
    this.controlName = controlName
    this.handleValueChange()
  }
}
