import { TestBed } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'

import { VrgFieldRadioService } from './vrg-field-radio.service'

describe(`${VrgFieldRadioService.name}`, () => {
  let service: VrgFieldRadioService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
    })
    service = TestBed.get(VrgFieldRadioService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
