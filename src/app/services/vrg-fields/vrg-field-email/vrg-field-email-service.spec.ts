import { TestBed } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'

import { VrgFieldEmailService } from './vrg-field-email.service'

describe(`${VrgFieldEmailService.name}`, () => {
  let service: VrgFieldEmailService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
    })
    service = TestBed.get(VrgFieldEmailService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
