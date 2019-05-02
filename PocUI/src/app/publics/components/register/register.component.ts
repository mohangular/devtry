import { Component, OnInit } from './node_modules/@angular/core';
import { Router } from './node_modules/@angular/router';
import {
  FormGroup,
  FormBuilder,
  Validators
} from './node_modules/@angular/forms';
import { LoginService } from '../../services/login.service';
import { Observable } from './node_modules/rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private bs: LoginService
  ) {
    this.createForm();
  }
  createForm() {
    this.registerForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }
  ngOnInit() {}
  addPerson(name, email, password, confirmPassword): Observable<any> {
    console.log('ts');
    this.bs.addPerson(name, email, password, confirmPassword).subscribe(res => {
      console.log('res done', res);
    });
    return;
  }
}
