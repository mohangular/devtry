import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { Observable } from 'rxjs';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  // angForm: FormGroup;
  errorParametre;
  password: string;
  error: string;
  showSpinner = false;
  constructor(private router: Router, private logger: NGXLogger, private fb: FormBuilder, private service: LoginService) {
    this.logger.debug('Debug message');
    this.logger.info('Info message');
    this.logger.log('Default log message');
    this.logger.warn('Warning message');
    this.logger.error('Error message');
    // this.createForm();
    this.getUserDetails();
  }
  /*createForm() {
    this.angForm = this.fb.group({
      emailid: ['', Validators.required ],
      loginpassword: ['', Validators.required ]
    });
  }*/
  ngOnInit() {}

  login(username, password): Observable<any> {
    this.showSpinner = true;
   this.service.login(username, password)
    .subscribe(res => {
      console.log('user Details res', res);
      this.errorParametre = res['res']['err'].error;
    // this.adminCheck = res['res']['obj'].admin;
    console.log(this.errorParametre);
    if (this.errorParametre === 'true') {
        console.log('if');
        this.error = 'Invalid Credentials';
        this.showSpinner = false;
       // this.router.navigateByUrl('/error');
    } else {
      console.log('if not');
      this.showSpinner = false;
      this.router.navigateByUrl('/home');
      }
    });
    return this.errorParametre;
  }
  getUserDetails() {
    this.service.getUserDetails().subscribe(
      res => {
        console.log(res, 'res');
      });
  }
}



