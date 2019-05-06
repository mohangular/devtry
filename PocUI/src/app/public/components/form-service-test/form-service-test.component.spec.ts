import { FormServiceService } from './../../services/form-service.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormServiceTestComponent } from './form-service-test.component';
import { Observable } from 'rxjs';

describe('FormServiceTestComponent', () => {
  let component: FormServiceTestComponent;
  let service: FormServiceService;

  beforeEach(() => {
    service = new FormServiceService(null);
    component = new FormServiceTestComponent(service);
  });

  it('should call service and get list of response on load', () => {
    let response = [1, 2, 3];
    spyOn(service, 'getList').and.callFake(() => {
      return response;
    });

    component.ngOnInit();

    expect(component.response).toBe(response);
  });

  it('should call service and get list of response on load then assign to response variable', () => {
    let response = [1, 2, 3];
    spyOn(service, 'getList').and.callFake(() => {
      return response;
    });

    component.ngOnInit();

    expect(component.response).toBe(response);
  });
});
