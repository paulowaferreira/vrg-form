import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { VrgLabelComponent } from './vrg-label.component'

describe(`${VrgLabelComponent.name}`, () => {
  let component: VrgLabelComponent
  let fixture: ComponentFixture<VrgLabelComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VrgLabelComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(VrgLabelComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
