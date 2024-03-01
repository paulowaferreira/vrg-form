import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'

import { VrgFieldNumberComponent } from './vrg-field-number.component'

describe(`${VrgFieldNumberComponent.name}`, () => {
  let component: VrgFieldNumberComponent
  let fixture: ComponentFixture<VrgFieldNumberComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VrgFieldNumberComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(VrgFieldNumberComponent)
    component = fixture.componentInstance
    component.controller = new FormGroup({
      [component.fieldControlName]: new FormControl()
    })
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should have default value set to 0', () => {
    expect(component.value).toBe(0)
  })

  it('should have default step set to undefined', () => {
    expect(component.step).toBeUndefined()
  })

  it('should set placeholder to empty string if not provided', () => {
    component.checkPlaceholder()
    expect(component.placeholder).toBe('')
  })

  it('should not change placeholder if provided', () => {
    component.placeholder = 'Test Placeholder'
    component.checkPlaceholder()
    expect(component.placeholder).toBe('Test Placeholder')
  })
})
