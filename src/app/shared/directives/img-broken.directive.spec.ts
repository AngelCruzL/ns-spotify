import { ImgBrokenDirective } from './img-broken.directive';
import { ElementRef } from '@angular/core';

describe('ImgBrokenDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = new ElementRef('');
    const directive = new ImgBrokenDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
