import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { VrgFieldPhoneComponent } from './vrg-field-phone.component'

describe(`${VrgFieldPhoneComponent.name}`, () => {
  let component: VrgFieldPhoneComponent
  let fixture: ComponentFixture<VrgFieldPhoneComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VrgFieldPhoneComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(VrgFieldPhoneComponent)
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
})
