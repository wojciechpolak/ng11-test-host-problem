import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoobarComponent } from './foobar.component';

/**
 *  "Component inside a test host" issue with Ivy
 *  https://angular.io/guide/testing-components-scenarios#component-inside-a-test-host
 */
@Component({
  selector: 'app-foobar-test',
  template: `<app-foobar [abc]="'xyz'"></app-foobar>`
})
class TestFoobarComponent {
}

describe('FoobarComponent', () => {
  let component: FoobarComponent;
  let fixture: ComponentFixture<TestFoobarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        FoobarComponent,
        TestFoobarComponent,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFoobarComponent);
    component = fixture.nativeElement.querySelector('app-foobar');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
