import { FormBuilder } from '@angular/forms';

import { FormTestngComponent } from './form-testng.component';

describe('FormTestngComponent', () => {
  let component: FormTestngComponent;

  beforeEach(() => {
    component = new FormTestngComponent(new FormBuilder());
  });

  it('should have control with userName', () => {
    expect(component.form.contains('userName')).toBeTruthy();
  });

  it('should have control with email', () => {
    expect(component.form.contains('email')).toBeTruthy();
  });

  it('should make the control userName required - supplied value', () => {
    let control = component.form.get('userName');

    control.setValue('Mohan');

    expect(control.valid).toBeTruthy();
  });

  it('should make the control userName required - supplied no value', () => {
    let control = component.form.get('userName');

    control.setValue('');

    expect(control.valid).toBeFalsy();
  });
});
