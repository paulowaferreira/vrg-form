import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'

import { VrgFieldDropdownComponent } from './vrg-field-dropdown.component'

describe(`${VrgFieldDropdownComponent.name}`, () => {
  let component: VrgFieldDropdownComponent
  let fixture: ComponentFixture<VrgFieldDropdownComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VrgFieldDropdownComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(VrgFieldDropdownComponent)
    component = fixture.componentInstance
    component.reactiveController = new FormGroup({
      [component.controlName]: new FormControl(),
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
