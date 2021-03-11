import {Directive, ElementRef, HostListener, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Directive({
  selector: '[appPopup]'
})
export class PopupDirective {
  @Input() appPopup: TemplateRef<any>;

  private isOpen$ = new BehaviorSubject<boolean>(false);

  constructor(
    private el: ElementRef,
    private viewContainer: ViewContainerRef
  ) {
    this.el.nativeElement.style.cursor = 'pointer';

    this.isOpen$.subscribe(isOpen => {
      if (isOpen && this.appPopup) {
        this.viewContainer.createEmbeddedView(this.appPopup);
      } else {
        this.viewContainer.clear();
      }
    });
  }

  @HostListener('document:click', ['$event.target']) onDocumentClick(target) {
    const clickedInside = this.el.nativeElement.contains(target) || this.appPopup.elementRef.nativeElement.contains(target);

    if (!clickedInside) {
      this.isOpen$.next(false);
    }
  }

  @HostListener('click') onClick() {
    this.isOpen$.next(!this.isOpen$.getValue());
  }
}
