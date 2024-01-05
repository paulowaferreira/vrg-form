import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { FieldModel } from "../models/field.model";

@Component({
  selector: "vrg-page-example",
  templateUrl: "./vrg-page-example.component.html",
  styleUrls: ["./vrg-page-example.component.scss"],
})
export class VrgPageExampleComponent implements OnInit {
  parentForm: FormGroup;
  fields: FieldModel[];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createFields();
    this.createForm();
    this.onChange();
  }

  onChange() {
    this.parentForm.valueChanges.subscribe((values) => {
      console.log(values);
      console.log(this.parentForm.valid);
    });
  }

  private createFields() {
    this.fields = [
      {
        autofocus: true,
        name: 'name',
        controlName: "name",
        type: "text",
        id: "name"
      },
      {
        autofocus: true,
        name: 'age',
        controlName: "age",
        type: "number",
        id: "age",
        step: 5,
      },
    ];
  }

  createForm() {
    this.parentForm = this.fb.group({
      name: new FormControl("", [
        Validators["required"],
        Validators["minLength"](3),
        Validators["maxLength"](16),
      ]),
      age: new FormControl(0, [
        Validators.required,
        Validators.min(0),
        Validators.max(100),
      ]),
    });
  }
}
