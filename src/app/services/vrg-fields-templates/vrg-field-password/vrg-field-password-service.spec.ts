import { TestBed } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'

import { VrgFieldPasswordService } from './vrg-field-password.service'

describe(`${VrgFieldPasswordService.name}`, () => {
  let service: VrgFieldPasswordService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
    })
    service = TestBed.get(VrgFieldPasswordService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
