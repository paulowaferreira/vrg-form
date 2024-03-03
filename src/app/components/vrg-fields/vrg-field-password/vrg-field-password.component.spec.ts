import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { VrgFieldPasswordComponent } from './vrg-field-password.component'

describe(`${VrgFieldPasswordComponent.name}`, () => {
  let component: VrgFieldPasswordComponent
  let fixture: ComponentFixture<VrgFieldPasswordComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VrgFieldPasswordComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(VrgFieldPasswordComponent)
    component = fixture.componentInstance
    component.controller = new FormGroup({
      [component.controlName]: new FormControl()
    })
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should have default value set to an empty string', () => {
    expect(component.value).toBe('')
  })

  it('should have default type set to FieldTypeEnum', () => {
    expect(component.type).toBeDefined()
  })

  it('should have default showPassword set to false', () => {
    expect(component.showPassword).toBe(false)
  })

  it('should have default passwordShowText set to "mostrar"', () => {
    expect(component.passwordShowText).toBe('mostrar')
  })

  it('should toggle showPassword and update passwordShowText on onShowPassword', () => {
    component.onShowPassword()
    expect(component.showPassword).toBe(true)
    expect(component.passwordShowText).toBe('esconder')

    component.onShowPassword()
    expect(component.showPassword).toBe(false)
    expect(component.passwordShowText).toBe('mostrar')
  })
})
