import { FormBuilder } from '@angular/forms'

import { VrgFieldBase } from './vrg-field-base.class'

describe(`${VrgFieldBase.name}`, () => {
  let vrgFieldBase: VrgFieldBase

  beforeEach(() => {
    vrgFieldBase = new VrgFieldBase()
    vrgFieldBase.controller = new FormBuilder().group({})
  })

  it('should create', () => {
    expect(vrgFieldBase).toBeTruthy()
  })

  it('should emit blur event', () => {
    const spy = spyOn(vrgFieldBase.blur, 'emit')
    const event = {} as FocusEvent
    vrgFieldBase.onBlur(event)
    expect(spy).toHaveBeenCalledWith(event)
  })

  it('should emit change event', () => {
    const spy = spyOn(vrgFieldBase.change, 'emit')
    const event = {} as Event
    vrgFieldBase.onChange(event)
    expect(spy).toHaveBeenCalledWith(event)
  })

  it('should emit focus event', () => {
    const spy = spyOn(vrgFieldBase.focus, 'emit')
    const event = {} as FocusEvent
    vrgFieldBase.onFocus(event)
    expect(spy).toHaveBeenCalledWith(event)
  })

  it('should emit input event', () => {
    const spy = spyOn(vrgFieldBase.input, 'emit')
    const event = {} as Event
    vrgFieldBase.onInput(event)
    expect(spy).toHaveBeenCalledWith(event)
  })

  it('should emit keyup event', () => {
    const spy = spyOn(vrgFieldBase.keyup, 'emit')
    const event = {} as KeyboardEvent
    vrgFieldBase.onKeyup(event)
    expect(spy).toHaveBeenCalledWith(event)
  })

  it('should emit keydown event', () => {
    const spy = spyOn(vrgFieldBase.keyup, 'emit')
    const event = {} as KeyboardEvent
    vrgFieldBase.onKeyDown(event)
    expect(spy).toHaveBeenCalledWith(event)
  })

  it('should emit search event', () => {
    const spy = spyOn(vrgFieldBase.search, 'emit')
    const event = {} as Event
    vrgFieldBase.onSearch(event)
    expect(spy).toHaveBeenCalledWith(event)
  })

  it('should emit submit event', () => {
    const spy = spyOn(vrgFieldBase.submit, 'emit')
    const event = {} as Event
    vrgFieldBase.onSubmit(event)
    expect(spy).toHaveBeenCalledWith(event)
  })

  it('should emit click event', () => {
    const spy = spyOn(vrgFieldBase.click, 'emit')
    const event = {} as MouseEvent
    vrgFieldBase.onClick(event)
    expect(spy).toHaveBeenCalledWith(event)
  })

  it('should emit doubleClick event', () => {
    const spy = spyOn(vrgFieldBase.doubleClick, 'emit')
    const event = {} as MouseEvent
    vrgFieldBase.onDoubleClick(event)
    expect(spy).toHaveBeenCalledWith(event)
  })

  it('should emit mouseOver event', () => {
    const spy = spyOn(vrgFieldBase.mouseOver, 'emit')
    const event = {} as MouseEvent
    vrgFieldBase.onMouseOver(event)
    expect(spy).toHaveBeenCalledWith(event)
  })

  it('should emit mouseOut event', () => {
    const spy = spyOn(vrgFieldBase.mouseOut, 'emit')
    const event = {} as MouseEvent
    vrgFieldBase.onMouseOut(event)
    expect(spy).toHaveBeenCalledWith(event)
  })

  it('should emit mouseEnter event', () => {
    const spy = spyOn(vrgFieldBase.mouseEnter, 'emit')
    const event = {} as MouseEvent
    vrgFieldBase.onMouseEnter(event)
    expect(spy).toHaveBeenCalledWith(event)
  })

  it('should emit mouseLeave event', () => {
    const spy = spyOn(vrgFieldBase.mouseLeave, 'emit')
    const event = {} as MouseEvent
    vrgFieldBase.onMouseLeave(event)
    expect(spy).toHaveBeenCalledWith(event)
  })

  it('should set and get autocomplete property', () => {
    const value = 'off'
    vrgFieldBase.autocomplete = value
    expect(vrgFieldBase.autocomplete).toEqual(value)
  })

  it('should set and get autofocus property', () => {
    const value = true
    vrgFieldBase.autofocus = value
    expect(vrgFieldBase.autofocus).toEqual(value)
  })

  it('should set and get controlName property', () => {
    const value = 'testControl'
    vrgFieldBase.controlName = value
    expect(vrgFieldBase.controlName).toEqual(value)
  })

  it('should set and get disabled property', () => {
    const value = true
    vrgFieldBase.disabled = value
    expect(vrgFieldBase.disabled).toEqual(value)
  })

  it('should set and get id property', () => {
    const value = 'testId'
    vrgFieldBase.id = value
    expect(vrgFieldBase.id).toEqual(value)
  })

  it('should set and get name property', () => {
    const value = 'testName'
    vrgFieldBase.name = value
    expect(vrgFieldBase.name).toEqual(value)
  })

  it('should set and get ngClass property', () => {
    const value = 'custom-class'
    vrgFieldBase.ngClass = value
    expect(vrgFieldBase.ngClass).toEqual(value)
  })

  it('should set and get ngStyle property', () => {
    const value = `{ 'font-size': '16px' }`
    vrgFieldBase.ngStyle = value
    expect(vrgFieldBase.ngStyle).toEqual(value)
  })

  it('should set and get reactiveController property', () => {
    const value = new FormBuilder().group({})
    vrgFieldBase.controller = value
    expect(vrgFieldBase.controller).toEqual(value)
  })

  it('should set and get placeholder property', () => {
    const value = 'Enter text'
    vrgFieldBase.placeholder = value
    expect(vrgFieldBase.placeholder).toEqual(value)
  })

  it('should set and get readOnly property', () => {
    const value = true
    vrgFieldBase.readOnly = value
    expect(vrgFieldBase.readOnly).toEqual(value)
  })

  it('should set and get spellcheck property', () => {
    const value = true
    vrgFieldBase.spellcheck = value
    expect(vrgFieldBase.spellcheck).toEqual(value)
  })

  it('should set and get tabindex property', () => {
    const value = 1
    vrgFieldBase.tabindex = value
    expect(vrgFieldBase.tabindex).toEqual(value)
  })

  it('should set and get value property', () => {
    const value = 'Test value'
    vrgFieldBase.value = value
    expect(vrgFieldBase.value).toEqual(value)
  })
})
