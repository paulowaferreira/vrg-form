import { TestBed } from '@angular/core/testing';

import { VrgThemeService } from './vrg-theme.service';

describe(`${VrgThemeService.name}`, () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VrgThemeService = TestBed.get(VrgThemeService);
    expect(service).toBeTruthy();
  });
});
