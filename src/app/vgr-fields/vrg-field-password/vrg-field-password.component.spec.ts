import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { VrgFieldPasswordComponent } from './vrg-field-password.component'

describe(`${VrgFieldPasswordComponent.name}`, () => {
  let component: VrgFieldPasswordComponent
  let fixture: ComponentFixture<VrgFieldPasswordComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VrgFieldPasswordComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(VrgFieldPasswordComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
