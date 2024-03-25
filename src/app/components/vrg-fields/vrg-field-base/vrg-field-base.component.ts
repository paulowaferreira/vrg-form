// import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core'
// import { AbstractControl, FormControl, FormGroup } from '@angular/forms'

// import { VrgFieldValidationError } from 'src/app/interfaces/vrg-field-validator-error.interface'
// import { VrgFieldErrorService } from 'src/app/services/vrg-field-error/vrg-field-error.service'

// @Component({ template: '' })
// export class VrgFieldBaseComponent implements OnChanges {
//   @Input() autocomplete: string
//   @Input() autofocus: boolean = false
//   @Input() controlName: string
//   @Input() customNgClassContainer: string
//   @Input() customNgClassInput: string
//   @Input() customNgClassLabel: string
//   @Input() disabled: boolean = false
//   @Input() errorClass: string
//   @Input() formGroup: FormGroup = new FormGroup({'': new FormControl()})
//   @Input() id: string
//   @Input() isFilled: boolean = true
//   @Input() labelText: string
//   @Input() name: string
//   @Input() placeholder: string = ''
//   @Input() readOnly: boolean = false
//   @Input() required: boolean = false
//   @Input() spellcheck: boolean
//   @Input() tabindex: number
  
//   @Output() blur: EventEmitter<any> = new EventEmitter<any>()
//   @Output() change: EventEmitter<any> = new EventEmitter<any>()
//   @Output() focus: EventEmitter<FocusEvent> = new EventEmitter<FocusEvent>()
//   @Output() keyup: EventEmitter<KeyboardEvent> =
//   new EventEmitter<KeyboardEvent>()
//   @Output() input: EventEmitter<Event> = new EventEmitter<Event>()
//   @Output() search: EventEmitter<any> = new EventEmitter<any>()
//   @Output() submit: EventEmitter<any> = new EventEmitter<any>()
//   @Output() click: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>()
//   @Output() doubleClick: EventEmitter<MouseEvent> =
//   new EventEmitter<MouseEvent>()
//   @Output() mouseOver: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>()
//   @Output() mouseOut: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>()
//   @Output() mouseEnter: EventEmitter<MouseEvent> =
//   new EventEmitter<MouseEvent>()
//   @Output() mouseLeave: EventEmitter<MouseEvent> =
//   new EventEmitter<MouseEvent>()
  
//   protected error: VrgFieldValidationError
//   protected ngClassContainer: Object
//   protected ngClassInput: Object
//   protected ngClassLabel: Object
//   control: AbstractControl
  
//   constructor(
//     private fieldService: VrgFieldErrorService,
//     private elementRef: ElementRef
//   ) { }

//   ngOnChanges(changes: SimpleChanges): void {
//     if(
//       changes['formGroup']
//       && changes['formGroup'].currentValue 
//       && changes['controlName']
//       && changes['controlName'].currentValue) {
//       this.formGroup = changes['formGroup'].currentValue
//       this.controlName = changes['controlName'].currentValue
//       this.control = this.formGroup.get(this.controlName)
//     }
//   }

//   handleValueChange(): void {
//     if(!!this.controlName) {
//       this.formGroup.get(this.controlName).valueChanges.subscribe(value => {
//         this.isFilled = !!value
//         this.error = this.fieldService.getFormErrors(
//           this.control,
//           this.elementRef
//         )
//       })
//     }
//   }

//   handleCustomClassInput(): void {
//     this.ngClassInput = this.buildCustomClass(this.customNgClassInput, this.ngClassInput)
//   }

//   buildCustomClass(customNgClasses: string, ngClasses: Object) {
//     if (!customNgClasses) return { } as Object
//     (customNgClasses.split(' ') as string[]).forEach(customClass => {
//       ngClasses = {
//         ...ngClasses,
//         [customClass]: true
//       }
//     })
//     return ngClasses
//   }

//   onBlur(event: FocusEvent): void {
//     this.blur.emit(event)
//   }

//   onChange(event: Event): void {
//     this.change.emit(event)
//   }

//   onFocus(event: FocusEvent): void {
//     this.focus.emit(event)
//   }

//   onInput(event: Event): void {
//     this.input.emit(event)
//   }

//   onKeyup(event: KeyboardEvent): void {
//     this.keyup.emit(event)
//   }

//   onKeyDown(event: KeyboardEvent): void {
//     this.keyup.emit(event)
//   }

//   onSearch(event: Event): void {
//     this.search.emit(event)
//   }

//   onSubmit(event: Event): void {
//     this.submit.emit(event)
//   }

//   onClick(event: MouseEvent): void {
//     this.click.emit(event)
//   }

//   onDoubleClick(event: MouseEvent): void {
//     this.doubleClick.emit(event)
//   }

//   onMouseOver(event: MouseEvent): void {
//     this.mouseOver.emit(event)
//   }

//   onMouseOut(event: MouseEvent): void {
//     this.mouseOut.emit(event)
//   }

//   onMouseEnter(event: MouseEvent): void {
//     this.mouseEnter.emit(event)
//   }

//   onMouseLeave(event: MouseEvent): void {
//     this.mouseLeave.emit(event)
//   }
// }
