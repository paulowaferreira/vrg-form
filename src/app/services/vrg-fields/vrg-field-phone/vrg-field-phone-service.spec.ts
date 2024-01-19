import { TestBed } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'

import { VrgFieldPhoneService } from './vrg-field-phone.service'

describe(`${VrgFieldPhoneService.name}`, () => {
  let service: VrgFieldPhoneService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
    })
    service = TestBed.get(VrgFieldPhoneService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
