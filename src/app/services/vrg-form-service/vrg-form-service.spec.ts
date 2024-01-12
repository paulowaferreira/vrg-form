import { TestBed } from '@angular/core/testing';

import { VrgFormService } from './vrg-form-service.service';

describe(`${VrgFormService.name}`, () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VrgFormService = TestBed.get(VrgFormService);
    expect(service).toBeTruthy();
  });
});
