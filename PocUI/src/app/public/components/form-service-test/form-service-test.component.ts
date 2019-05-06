import { FormServiceService } from './../../services/form-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-service-test',
  templateUrl: './form-service-test.component.html',
  styleUrls: ['./form-service-test.component.css']
})
export class FormServiceTestComponent implements OnInit {
  response: any;

  constructor(private service: FormServiceService) {}

  ngOnInit() {
    this.response = this.service.getList();
  }
}
