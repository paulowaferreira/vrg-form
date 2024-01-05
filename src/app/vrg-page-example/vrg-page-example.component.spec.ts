import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VrgPageExampleComponent } from './vrg-page-example.component';

describe('VrReactExemploComponent', () => {
  let component: VrgPageExampleComponent;
  let fixture: ComponentFixture<VrgPageExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VrgPageExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VrgPageExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
