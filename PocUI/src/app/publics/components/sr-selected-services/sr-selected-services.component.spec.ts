import {
  async,
  ComponentFixture,
  TestBed
} from './node_modules/@angular/core/testing';

import { SrSelectedServicesComponent } from './sr-selected-services.component';

describe('SrSelectedServicesComponent', () => {
  let component: SrSelectedServicesComponent;
  let fixture: ComponentFixture<SrSelectedServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SrSelectedServicesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrSelectedServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
