import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: 'img[appImgBroken]',
    standalone: true
})
export class ImgBrokenDirective {
  @Input() customImg: string | boolean = false;

  constructor(private hostElement: ElementRef) {
  }

  @HostListener('error') onError() {
    const nativeElement: HTMLImageElement = this.hostElement.nativeElement;
    if (this.customImg && typeof this.customImg === 'string') {
      nativeElement.src = this.customImg;
    } else {
      nativeElement.src = 'assets/img/placeholder.svg';
    }
  }
}
