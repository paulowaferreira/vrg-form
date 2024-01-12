import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { VrgFieldTextComponent } from './vrg-field-text.component';

describe(`${VrgFieldTextComponent.name}`, () => {
  let component: VrgFieldTextComponent;
  let fixture: ComponentFixture<VrgFieldTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VrgFieldTextComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VrgFieldTextComponent);
    component = fixture.componentInstance
    component.parentForm = new FormGroup({
      [component.controlName]: new FormControl(),
    })
    fixture.detectChanges()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
