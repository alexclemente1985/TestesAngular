import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
form: FormGroup;

  constructor(
    private renderer2: Renderer2,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      cat: [],
      dog: []
    })
  }

  disableForm(isDisabled: boolean){
    isDisabled ? this.form.disable() : this.form.enable();
  }

  ngOnInit(): void {
  }

}
