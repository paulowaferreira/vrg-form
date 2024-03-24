import { TestBed } from '@angular/core/testing'
import { ElementRef } from '@angular/core'
import { FormBuilder, FormControl, Validators } from '@angular/forms'

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
    const element = {
      nativeElement: {
        classList: {
          remove: jasmine.createSpy(),
          add: jasmine.createSpy()
        }
      }
    } as unknown as ElementRef
    const result = service.getFormErrors(control, element)
    expect(result).toBe(undefined)
  })

  it('should return error if field is touched', () => {
    const control = new FormControl('', [Validators.required])
    control.markAsTouched()
    const element = {
      nativeElement: {
        classList: {
          remove: jasmine.createSpy(),
          add: jasmine.createSpy()
        }
      }
    } as unknown as ElementRef
    const result = service.getFormErrors(control, element)
    expect(result).toEqual({ name: 'required', message: 'Campo obrigatório.' })
  })

  it('should return error if field marked as dirty', () => {
    const control = new FormControl('', [Validators.required])
    control.markAsDirty()
    const element = {
      nativeElement: {
        classList: {
          remove: jasmine.createSpy(),
          add: jasmine.createSpy()
        }
      }
    } as unknown as ElementRef
    const result = service.getFormErrors(control, element)
    expect(result).toEqual({ name: 'required', message: 'Campo obrigatório.' })
  })

  it('should return pattern error if field that contain pattern validator is marked as dirty', () => {
    const formGroupMock = new FormBuilder().group({
      email: new FormControl(
        '',
        [Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.(com.br|com)')]
      )
    })

    const controlMock = formGroupMock.get('email')
    controlMock.markAsDirty()
    controlMock.markAsTouched()
    controlMock.setValue('aaa')
    const element = {
      nativeElement: {
        classList: {
          remove: jasmine.createSpy(),
          add: jasmine.createSpy()
        }
      }
    } as unknown as ElementRef

    const result = service.getFormErrors(controlMock, element)

    expect(result).toEqual({ name: 'pattern', message: 'E-mail inválido' })
  })

  it('should return priority pattern error if the field contains more than one error other than pattern error', () => {
    const formGroupMock = new FormBuilder().group({
      password: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(16),
          Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]+$/)
        ]
      )
    })

    const controlMock = formGroupMock.get('password')
    controlMock.markAsDirty()
    controlMock.markAsTouched()
    controlMock.setValue('aaa')
    const element = {
      nativeElement: {
        classList: {
          remove: jasmine.createSpy(),
          add: jasmine.createSpy()
        }
      }
    } as unknown as ElementRef

    const result = service.getFormErrors(controlMock, element)

    expect(result).toEqual({
      name: 'pattern',
      message: 'O campo deve ter pelo menos 1 letra maiúscula, 1 número e 1 caractere especial.'
    })
  })

  it('should add error class if there is an error', () => {
    const control = new FormControl('', [Validators.required])
    control.markAsDirty()
    control.markAsTouched()
    const element = { nativeElement: { classList: { remove: jasmine.createSpy(), add: jasmine.createSpy() } } } as unknown as ElementRef
    service.getFormErrors(control, element)
    expect(element.nativeElement.classList.add).toHaveBeenCalledWith('--error')
  })

  it('should remove error class if there is no error', () => {
    const control = new FormControl('valid value')
    const element = { nativeElement: { classList: { remove: jasmine.createSpy(), add: jasmine.createSpy() } } } as unknown as ElementRef
    service.getFormErrors(control, element)
    expect(element.nativeElement.classList.remove).toHaveBeenCalledWith('--error')
  })
})
