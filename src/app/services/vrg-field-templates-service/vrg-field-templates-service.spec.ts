import { TestBed } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'

import { VrgFieldTemplatesService } from './vrg-field-templates.service'

describe(`${VrgFieldTemplatesService.name}`, () => {
  let service: VrgFieldTemplatesService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
    })
    service = TestBed.get(VrgFieldTemplatesService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
