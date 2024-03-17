import { TestBed } from '@angular/core/testing'
import { ElementRef } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'

import { VrgFieldErrorService } from './vrg-field-error.service'

describe(`${VrgFieldErrorService.name}`, () => {
  let service: VrgFieldErrorService

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VrgFieldErrorService]
    })
    service = TestBed.get(VrgFieldErrorService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should return null if no errors', () => {
    const control = new FormControl('valid value')
    const element = { nativeElement: { classList: { remove: jasmine.createSpy(), add: jasmine.createSpy() } } } as unknown as ElementRef
    const result = service.getFormErrors(control, 'Test Control', element)
    expect(result).toBe(undefined)
  })

  it('should return error if field is touched', () => {
    const control = new FormControl('', [Validators.required])
    control.markAsTouched()
    const element = { nativeElement: { classList: { remove: jasmine.createSpy(), add: jasmine.createSpy() } } } as unknown as ElementRef
    const result = service.getFormErrors(control, 'required', element)
    expect(result).toEqual({ name: 'required', message: 'Campo obrigatório.' })
  })

  it('should return error if field marked as dirty', () => {
    const control = new FormControl('', [Validators.required])
    control.markAsDirty()
    const element = { nativeElement: { classList: { remove: jasmine.createSpy(), add: jasmine.createSpy() } } } as unknown as ElementRef
    const result = service.getFormErrors(control, 'required', element)
    expect(result).toEqual({ name: 'required', message: 'Campo obrigatório.' })
  })

  it('should add error class if there is an error', () => {
    const control = new FormControl('', [Validators.required])
    control.markAsDirty()
    control.markAsTouched()
    const element = { nativeElement: { classList: { remove: jasmine.createSpy(), add: jasmine.createSpy() } } } as unknown as ElementRef
    service.getFormErrors(control, 'Test Control', element)
    expect(element.nativeElement.classList.add).toHaveBeenCalledWith('--error')
  })

  it('should remove error class if there is no error', () => {
    const control = new FormControl('valid value')
    const element = { nativeElement: { classList: { remove: jasmine.createSpy(), add: jasmine.createSpy() } } } as unknown as ElementRef
    service.getFormErrors(control, 'Test Control', element)
    expect(element.nativeElement.classList.remove).toHaveBeenCalledWith('--error')
  })

})
