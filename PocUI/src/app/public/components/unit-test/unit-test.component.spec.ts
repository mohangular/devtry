import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitTestComponent } from './unit-test.component';

// Arrange
let component: UnitTestComponent;

describe('UnitTestComponent', () => {
  beforeEach(() => {
    component = new UnitTestComponent();
  });

  it('should increment total likes to 1', () => {
    // Act
    component.like();

    // Assert
    expect(component.totalLikes).toBe(1);
  });

  it('should decrement total likes to -1', () => {
    // Act
    component.disLike();

    // Assert
    expect(component.totalLikes).toBe(-1);
  });
});
