import { Component, Input, OnInit } from "@angular/core"

import { VrgFieldBase } from "../base-class/vrg-field-base.class"

@Component({
  selector: "vrg-field-number",
  templateUrl: "./vrg-field-number.component.html",
  styleUrls: ["./vrg-field-number.component.scss"],
})
export class VrgFieldNumberComponent extends VrgFieldBase implements OnInit {
  @Input() value: number = 0
  @Input() step: number

  ngOnInit() {
    this.checkPlaceholder()
  }

  checkPlaceholder() {
    if (!this.placeholder) {
      this.placeholder = ''
    }
  }
}
