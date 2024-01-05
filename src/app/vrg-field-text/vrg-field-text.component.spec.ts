import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VrgFieldTextComponent } from './vrg-field-text.component';

describe(`${VrgFieldTextComponent.name}`, () => {
  let component: VrgFieldTextComponent;
  let fixture: ComponentFixture<VrgFieldTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VrgFieldTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VrgFieldTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
