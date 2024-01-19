import { TestBed } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'

import { VrgFieldNumberService } from './vrg-field-number.service'

describe(`${VrgFieldNumberService.name}`, () => {
  let service: VrgFieldNumberService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
    })
    service = TestBed.get(VrgFieldNumberService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
