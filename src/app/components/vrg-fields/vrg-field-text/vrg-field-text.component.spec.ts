import { ComponentFixture, TestBed } from '@angular/core/testing'

import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms'

import { VrgFieldErrorService } from 'src/app/services/vrg-field-error/vrg-field-error.service'
import { VrgLabelModule } from '../../vrg-label/vrg-label.module'
import { VrgFieldTextComponent } from './vrg-field-text.component'
import { SimpleChange, SimpleChanges } from '@angular/core'
import { VrgFieldValidationError } from 'src/app/interfaces/vrg-field-validator-error.interface'

describe('VrgFieldTextComponent', () => {
  let component: VrgFieldTextComponent
  let fixture: ComponentFixture<VrgFieldTextComponent>
  let fieldService: VrgFieldErrorService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VrgFieldTextComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        VrgLabelModule
      ]
    }).compileComponents()
  })

  beforeEach(() => {
    fieldService = TestBed.get(VrgFieldErrorService)
    fixture = TestBed.createComponent(VrgFieldTextComponent)
    component = fixture.componentInstance
    const formGroup = new FormGroup({
      test: new FormControl()
    })
    component.controlName = 'test'
    component.formGroup = formGroup
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should handle custom class input', () => {
    component.customNgClassInput = 'custom-class'

    component.handleCustomClassInput()

    expect(component.ngClassInput).toEqual({ 'custom-class': true })
  })

  it('should handle custom ng class container changes', () => {
    spyOn(component, 'buildCustomClass').and.returnValue({ 'container-class': true })
    component.ngClassContainer = {}
    component.customNgClassContainer = 'container-class'
    fixture.detectChanges()
    const changes: SimpleChanges = {
      customNgClassContainer: {
        currentValue: 'container-class',
        previousValue: null,
        firstChange: true,
        isFirstChange: () => true
      }
    }

    component.handleCustomNgClassContainerChanges(changes)

    expect(component.buildCustomClass).toHaveBeenCalledWith('container-class', component.ngClassContainer)
  })

  it('should call buildCustomClass when customNgClassLabel changes', () => {
    spyOn(component, 'buildCustomClass').and.returnValue({ 'test-label-class': true })
    component.ngClassLabel = {}
    component.customNgClassLabel = 'test-label-class'
    fixture.detectChanges()
    const changes: SimpleChanges = {
      customNgClassLabel: {
        currentValue: 'test-label-class',
        previousValue: null,
        firstChange: true,
        isFirstChange: () => true
      }
    }

    component.handleCustomNgClassLabelChanges(changes)

    expect(component.buildCustomClass).toHaveBeenCalledWith('test-label-class', component.ngClassLabel)
  })

  it('should not call buildCustomClass when customNgClassLabel is null', () => {
    const changes: SimpleChanges = {
      customNgClassLabel: {
        currentValue: null,
        previousValue: 'old-label-class',
        firstChange: false,
        isFirstChange: () => false
      }
    }
    spyOn(component, 'buildCustomClass')

    component.handleCustomNgClassLabelChanges(changes)

    expect(component.buildCustomClass).not.toHaveBeenCalled()
  })

  it('should handle form group changes', () => {
    const formGroup = new FormGroup({ testControl: new FormBuilder().control('') })
    const changes: any = {
      formGroup: { currentValue: formGroup },
      controlName: { currentValue: 'testControl' }
    }
    component.formGroup = new FormGroup({ test: new FormControl('') })
    component.controlName = 'test'
    fixture.detectChanges()
    spyOn(component, 'updateFormGroup')

    component.handleFormGroupChanges(changes)

    expect(component.updateFormGroup).toHaveBeenCalledWith(formGroup, 'testControl')
  })

  it('should handle value change', () => {
    spyOn(fieldService, 'getFormErrors').and.returnValue({} as VrgFieldValidationError)
    const control = new FormControl()
    component.formGroup = new FormGroup({ testControl: control })
    component.controlName = 'testControl'
    fixture.detectChanges()

    component.handleValueChange()

    fixture.detectChanges()
    control.setValue('test value')

    expect(fieldService.getFormErrors).toHaveBeenCalled()
  })

  it('should update form group', () => {
    const formGroup = new FormGroup({ testControl: new FormBuilder().control('') })

    component.updateFormGroup(formGroup, 'testControl')

    expect(component.formGroup).toBe(formGroup)
    expect(component.controlName).toBe('testControl')
  })

  it('should handle form group changes', () => {
    const changes: SimpleChanges = {
      formGroup: new SimpleChange(null, new FormGroup({}), true),
      controlName: new SimpleChange(null, 'testControl', true)
    }
    spyOn(component, 'handleFormGroupChanges')

    component.ngOnChanges(changes)

    expect(component.handleFormGroupChanges).toHaveBeenCalledWith(changes)
  })

  it('should handle custom class input', () => {
    spyOn(component, 'handleCustomClassInput')

    component.ngOnChanges({})

    expect(component.handleCustomClassInput).toHaveBeenCalled()
  })

  it('should handle custom ng class container changes', () => {
    const changes: SimpleChanges = {
      customNgClassContainer: new SimpleChange(null, 'test-container-class', true)
    }
    spyOn(component, 'handleCustomNgClassContainerChanges')

    component.ngOnChanges(changes)

    expect(component.handleCustomNgClassContainerChanges).toHaveBeenCalledWith(changes)
  })

  it('should handle custom ng class label changes', () => {
    const changes: SimpleChanges = {
      customNgClassLabel: new SimpleChange(null, 'test-label-class', true)
    }
    spyOn(component, 'handleCustomNgClassLabelChanges')

    component.ngOnChanges(changes)

    expect(component.handleCustomNgClassLabelChanges).toHaveBeenCalledWith(changes)
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

  it('should emit keydown event', () => {
    const event = new KeyboardEvent('keydown')
    spyOn(component.keyup, 'emit')

    component.onKeyDown(event)

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
})
