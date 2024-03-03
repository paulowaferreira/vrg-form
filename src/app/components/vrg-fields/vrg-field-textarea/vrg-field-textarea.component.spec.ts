import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'

import { VrgFieldTextareaComponent } from './vrg-field-textarea.component'

describe(`${VrgFieldTextareaComponent.name}`, () => {
  let component: VrgFieldTextareaComponent
  let fixture: ComponentFixture<VrgFieldTextareaComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VrgFieldTextareaComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(VrgFieldTextareaComponent)
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
