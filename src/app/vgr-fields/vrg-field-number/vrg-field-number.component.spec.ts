import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'

import { VrgFieldNumberComponent } from './vrg-field-number.component'

describe(`${VrgFieldNumberComponent.name}`, () => {
  let component: VrgFieldNumberComponent
  let fixture: ComponentFixture<VrgFieldNumberComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ VrgFieldNumberComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(VrgFieldNumberComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should have default value of 0', () => {
    expect(component.value).toBe(0)
  })

  it('should have default step of undefined', () => {
    expect(component.step).toBeUndefined()
  })

  it('should initialize with checkPlaceholder', () => {
    spyOn(component, 'checkPlaceholder')
    component.ngOnInit()
    expect(component.checkPlaceholder).toHaveBeenCalled()
  })

  it('should set placeholder to empty string in checkPlaceholder if not provided', () => {
    component.placeholder = undefined
    component.checkPlaceholder()
    expect(component.placeholder).toEqual('')
  })
})
