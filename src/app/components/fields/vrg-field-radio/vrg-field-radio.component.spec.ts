import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'

import { VrgFieldRadioComponent } from './vrg-field-radio.component'

describe(`${VrgFieldRadioComponent.name}`, () => {
  let component: VrgFieldRadioComponent
  let fixture: ComponentFixture<VrgFieldRadioComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VrgFieldRadioComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(VrgFieldRadioComponent)
    component = fixture.componentInstance
    component.reactiveController = new FormGroup({
      [component.controlName]: new FormControl()
    })
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
