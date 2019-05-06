import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-testng',
  templateUrl: './form-testng.component.html',
  styleUrls: ['./form-testng.component.css']
})
export class FormTestngComponent implements OnInit {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      userName: ['', Validators.required],
      email: ['']
    });
  }

  ngOnInit() {}
}
