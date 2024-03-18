import { ElementRef, SimpleChange, SimpleChanges } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'

import { FormControl, FormGroup } from '@angular/forms'
import { VrgFieldErrorService } from 'src/app/services/vrg-field-error/vrg-field-error.service'
import { VrgFieldBaseComponent } from './vrg-field-base.component'

class MockElementRef extends ElementRef {
  constructor() {
    super(null)
  }
}

describe(`${VrgFieldBaseComponent.name}`, () => {
  let component: VrgFieldBaseComponent
  let fixture: ComponentFixture<VrgFieldBaseComponent>
  let fieldErrorService: VrgFieldErrorService
  let service: VrgFieldErrorService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VrgFieldBaseComponent],
      providers: [
        VrgFieldErrorService,
        {
          provide: ElementRef,
          useClass: MockElementRef
        }
      ]
    }).compileComponents()
    service = TestBed.get(VrgFieldErrorService)
    fixture = TestBed.createComponent(VrgFieldBaseComponent)
    component = fixture.componentInstance
    fieldErrorService = TestBed.get(VrgFieldErrorService)
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should initialize control from formGroup and controlName inputs', () => {
    const formGroup = new FormGroup({
      testControl: new FormControl('')
    })
    const changes: SimpleChanges = {
      formGroup: new SimpleChange(null, formGroup, true),
      controlName: new SimpleChange(null, 'testControl', true)
    }

    component.ngOnChanges(changes)

    expect(component.control).toEqual(formGroup.get('testControl'))
  })

  it('should subscribe to control value changes on handleValueChange', () => {
    const mockControl = new FormControl('')
    component.control = mockControl
    spyOn(mockControl.valueChanges, 'subscribe')

    component.handleValueChange()

    expect(mockControl.valueChanges.subscribe).toHaveBeenCalled()
  })

  it('should handle custom input class correctly', () => {
    const customNgClassInput = 'custom-input-class'
    component.customNgClassInput = customNgClassInput

    component.handleCustomClassInput()

    expect(component['ngClassInput']).toEqual({ [customNgClassInput]: true })
  })

  it('should emit blur event', () => {
    spyOn(component.blur, 'emit')
    const event = new FocusEvent('blur')

    component.onBlur(event)

    expect(component.blur.emit).toHaveBeenCalledWith(event)
  })

  it('should emit change event', () => {
    spyOn(component.change, 'emit')
    const event = new Event('change')

    component.onChange(event)

    expect(component.change.emit).toHaveBeenCalledWith(event)
  })

  it('should emit focus event', () => {
    spyOn(component.focus, 'emit')
    const event = new FocusEvent('focus')

    component.onFocus(event)

    expect(component.focus.emit).toHaveBeenCalledWith(event)
  })

  it('should emit input event', () => {
    spyOn(component.input, 'emit')
    const event = new Event('input')

    component.onInput(event)

    expect(component.input.emit).toHaveBeenCalledWith(event)
  })

  it('should emit keyup event', () => {
    spyOn(component.keyup, 'emit')
    const event = new KeyboardEvent('keyup')

    component.onKeyup(event)

    expect(component.keyup.emit).toHaveBeenCalledWith(event)
  })

  it('should emit search event', () => {
    spyOn(component.search, 'emit')
    const event = new Event('search')

    component.onSearch(event)

    expect(component.search.emit).toHaveBeenCalledWith(event)
  })

  it('should emit submit event', () => {
    spyOn(component.submit, 'emit')
    const event = new Event('submit')

    component.onSubmit(event)

    expect(component.submit.emit).toHaveBeenCalledWith(event)
  })

  it('should emit click event', () => {
    spyOn(component.click, 'emit')
    const event = new MouseEvent('click')

    component.onClick(event)

    expect(component.click.emit).toHaveBeenCalledWith(event)
  })

  it('should emit doubleClick event', () => {
    spyOn(component.doubleClick, 'emit')
    const event = new MouseEvent('dblclick')

    component.onDoubleClick(event)

    expect(component.doubleClick.emit).toHaveBeenCalledWith(event)
  })

  it('should emit mouseOver event', () => {
    spyOn(component.mouseOver, 'emit')
    const event = new MouseEvent('mouseover')

    component.onMouseOver(event)

    expect(component.mouseOver.emit).toHaveBeenCalledWith(event)
  })

  it('should emit mouseOut event', () => {
    spyOn(component.mouseOut, 'emit')
    const event = new MouseEvent('mouseout')

    component.onMouseOut(event)

    expect(component.mouseOut.emit).toHaveBeenCalledWith(event)
  })

  it('should emit mouseEnter event', () => {
    spyOn(component.mouseEnter, 'emit')
    const event = new MouseEvent('mouseenter')

    component.onMouseEnter(event)

    expect(component.mouseEnter.emit).toHaveBeenCalledWith(event)
  })

  it('should emit mouseLeave event', () => {
    spyOn(component.mouseLeave, 'emit')
    const event = new MouseEvent('mouseleave')

    component.onMouseLeave(event)

    expect(component.mouseLeave.emit).toHaveBeenCalledWith(event)
  })

  it('should emit keydown event', () => {
    spyOn(component.keyup, 'emit')

    const mockEvent = new KeyboardEvent('keydown')
    component.onKeyDown(mockEvent)

    expect(component.keyup.emit).toHaveBeenCalledWith(mockEvent)
  })
})