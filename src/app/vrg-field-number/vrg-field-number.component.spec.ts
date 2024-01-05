import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VrgFieldNumberComponent } from './vrg-field-number.component';

describe(`${VrgFieldNumberComponent.name}`, () => {
  let component: VrgFieldNumberComponent;
  let fixture: ComponentFixture<VrgFieldNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VrgFieldNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VrgFieldNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
