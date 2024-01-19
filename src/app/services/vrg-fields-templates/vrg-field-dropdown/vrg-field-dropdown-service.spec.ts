import { TestBed } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'

import { VrgFieldDropdownService } from './vrg-field-dropdown.service'

describe(`${VrgFieldDropdownService.name}`, () => {
  let service: VrgFieldDropdownService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
    })
    service = TestBed.get(VrgFieldDropdownService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
