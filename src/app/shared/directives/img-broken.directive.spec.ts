import { Component, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgBrokenDirective } from './img-broken.directive';
import { By } from '@angular/platform-browser';

@Component({
  template: '<img class="testing-directive" appImgBroken [src]="srcMock" alt="" />'
})
class TestComponent {
  srcMock: undefined | null | string = null;
}

describe('ImgBrokenDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImgBrokenDirective, TestComponent]
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const mockElementRef = new ElementRef('');
    const directive = new ImgBrokenDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });

  it('should create an instance of TestComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should set a custom src when the image is broken', (done: DoneFn) => {
    const beforeImgElement = fixture.debugElement.query(By.css('.testing-directive')).nativeElement;
    const beforeImgSrc = beforeImgElement.src;
    component.srcMock = undefined;

    setTimeout(() => {
      const afterImgElement = fixture.debugElement.query(By.css('.testing-directive')).nativeElement;
      const afterImgSrc = afterImgElement.src;

      expect(beforeImgSrc).not.toEqual(afterImgSrc);
      expect(afterImgSrc).toContain('img/placeholder');
      done();
    }, 1500);
  });
});
