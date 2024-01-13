import { Injectable } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  ValidatorFn,
  Validators,
} from "@angular/forms";

import {
  FieldControlModel,
  FieldModel,
  FormValidatorsModel,
  ReactiveFormModel,
  ReactiveFormValidatorModel,
} from "../../models";

@Injectable({
  providedIn: "root",
})
export class VrgFormService {
  constructor(private formBuilder: FormBuilder) {}

  createForm(formModel: FieldModel[]): ReactiveFormModel {
    const reactiveForm: ReactiveFormModel = this.buildNewReactiveForm();

    formModel.forEach(({ control, properties }) => {
      const newFormControl = this.buildNewFormControl(control);

      if (properties.disabled) this.disableField(newFormControl);

      reactiveForm.parentForm.addControl(control.name, newFormControl);
      reactiveForm.fieldProperties.push(properties);
    });

    return reactiveForm;
  }

  disableField(formControl: FormControl) {
    formControl.disable();
  }

  private buildValidators(
    validators: ReactiveFormValidatorModel[]
  ): ValidatorFn[] {
    return validators.map(({ key, value }) => {
      return ["required"].includes(key)
        ? Validators[key]
        : Validators[key](value);
    });
  }

  private buildNewFormControl(control: FieldControlModel): FormControl {
    const fieldValidatorsArray = this.getValidatorsArrayConverted(
      control.validators
    );
    const validators = this.buildValidators(fieldValidatorsArray);
    return new FormControl(control.initialValue, validators);
  }

  private buildNewReactiveForm(): ReactiveFormModel {
    return { parentForm: this.formBuilder.group({}), fieldProperties: [] };
  }

  private getValidatorsArrayConverted(
    validators: FormValidatorsModel
  ): ReactiveFormValidatorModel[] {
    return Object.entries(validators).map(([key, value]) => ({ key, value }));
  }
}
