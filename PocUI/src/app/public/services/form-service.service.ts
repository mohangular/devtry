import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {
  constructor(private http: HttpClient) {}

  getList() {
    return this.http.get('');
  }
}
