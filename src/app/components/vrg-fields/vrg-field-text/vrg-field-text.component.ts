import { Component, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core'

import { VrgFieldValidationError } from 'src/app/interfaces/vrg-field-validator-error.interface'
import { VrgFieldService } from 'src/app/services/vrg-field/vrg-field.service'
import { VrgFieldBase } from '../base-class/vrg-field-base.class'

@Component({
  selector: 'vrg-field-text',
  templateUrl: './vrg-field-text.component.html',
  styleUrls: ['./vrg-field-text.component.scss']
})
export class VrgFieldTextComponent extends VrgFieldBase implements OnInit, OnChanges {
  @Input() classInput: {
    'className'?: string,
    'cssFilePath'?: string
  } = {className: '', cssFilePath: ''}
  error: VrgFieldValidationError

  constructor(
    private fieldService: VrgFieldService,
    private renderer: Renderer2,
    private elementRef: ElementRef) {
    super()
  }

  ngOnInit(): void {
    this.handleValueChange()
  }

  ngAfterViewInit(): void {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['classInput'] && changes['classInput'].currentValue) {
      this.loadingCss()
    }
  }

  clearInput(): void {
    this.control.setValue('')
  }

  private handleValueChange(): void {
    this.control.valueChanges.subscribe(value => {
      this.isFilled = !!value
      this.error = this.fieldService.getFormErrors(
        this.control,
        this.labelText,
        this.elementRef
      )
    })
  }

  private loadingCss() {
    const selector = `#field-text__${this.id}`
    const el = this.elementRef.nativeElement.querySelector(selector)
    this.renderer.setAttribute(this.elementRef, 'rel', 'stylesheet');
    this.renderer.setAttribute(this.elementRef, 'type', 'text/css');
    this.renderer.setAttribute(this.elementRef, 'href', this.classInput.cssFilePath);
    this.renderer.addClass(el, this.classInput.className);
  }
}
