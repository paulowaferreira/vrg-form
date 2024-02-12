import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { VrgFieldEmailComponent } from './vrg-field-email.component'

describe(`${VrgFieldEmailComponent.name}`, () => {
  let component: VrgFieldEmailComponent
  let fixture: ComponentFixture<VrgFieldEmailComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VrgFieldEmailComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(VrgFieldEmailComponent)
    component = fixture.componentInstance
    component.reactiveController = new FormGroup({
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
