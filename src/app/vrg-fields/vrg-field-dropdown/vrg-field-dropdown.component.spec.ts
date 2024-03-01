import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'

import { VrgFieldDropdownComponent } from './vrg-field-dropdown.component'

describe(`${VrgFieldDropdownComponent.name}`, () => {
  let component: VrgFieldDropdownComponent
  let fixture: ComponentFixture<VrgFieldDropdownComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VrgFieldDropdownComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(VrgFieldDropdownComponent)
    component = fixture.componentInstance
    component.controller = new FormGroup({
      [component.fieldControlName]: new FormControl()
    })
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
