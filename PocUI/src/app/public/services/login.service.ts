import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cacheable } from 'ngx-cacheable';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  uri = 'http://localhost:6006';

  constructor(private http: HttpClient) {}
  @Cacheable()
  addPerson(name, email, password, confirmPassword) {
    console.log('service');
    const obj = {
      userName: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword
    };
    return this.http.post(`${this.uri}/addUser`, obj);
  }
  @Cacheable()
  login(username, password) {
    console.log('login service');
    const obj = {
      userName: null,
      email: username,
      password: password,
      confirmPassword: null,
      admin: false
    };
    const err = {
      error: null
    };
    return this.http.post(`${this.uri}/compare`, { obj, err });
  }

  @Cacheable()
  getUserDetails() {
    return this.http.get(`${this.uri}/getDetails`);
  }
  /* @Cacheable()
  addBook(book) {
      console.log('service', book);
      return  this.http.post(`${this.uri}/addBook`, book);
  }
  @Cacheable()
  updateExistingBookCount() {
    return  this.http.get(`${this.uri}/updateBook`);
  }
    getBusinesses() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editBusiness(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
    }
    updateBusiness(person_name, business_name, business_gst_number, id) {

      const obj = {
          person_name: person_name,
          business_name: business_name,
          business_gst_number: business_gst_number
        };
      this
        .http
        .post(`${this.uri}/update/${id}`, obj)
        .subscribe(res => console.log('Done'));
    }
    deleteBusiness(id) {
      return this
                .http
                .get(`${this.uri}/delete/${id}`);
    }
    getTest() {
      return '';
    }*/
}
