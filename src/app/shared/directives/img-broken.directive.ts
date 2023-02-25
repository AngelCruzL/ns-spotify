import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]',
})
export class ImgBrokenDirective {
  @Input() customImg: string = '';
  @HostListener('error') onError() {
    const nativeElement: HTMLImageElement = this.hostElement.nativeElement;
    nativeElement.src = this.customImg;
  }

  constructor(private hostElement: ElementRef) {}
}
