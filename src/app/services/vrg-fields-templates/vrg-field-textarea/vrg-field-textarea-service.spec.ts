import { TestBed } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'

import { VrgFieldTextareaService } from './vrg-field-textarea.service'

describe(`${VrgFieldTextareaService.name}`, () => {
  let service: VrgFieldTextareaService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
    })
    service = TestBed.get(VrgFieldTextareaService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
