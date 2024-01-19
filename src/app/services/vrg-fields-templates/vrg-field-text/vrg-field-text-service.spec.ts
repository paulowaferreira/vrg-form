import { TestBed } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'

import { VrgFieldTextService } from './vrg-field-text.service'

describe(`${VrgFieldTextService.name}`, () => {
  let service: VrgFieldTextService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
    })
    service = TestBed.get(VrgFieldTextService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
