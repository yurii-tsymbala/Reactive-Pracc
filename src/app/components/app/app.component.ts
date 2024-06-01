import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('resizeContainer')
  private resizeContainer!: ElementRef<HTMLDivElement>;
  private customDocument = document.getElementsByTagName(
    'app-root',
  )[0] as HTMLElement;
  private isResizing = false;
  private offsetX = 0;
  private offsetY = 0;

  ngAfterViewInit(): void {
    this.resizeContainer.nativeElement.addEventListener(
      'mousedown',
      (event) => {
        this.isResizing = true;
        this.offsetX =
          event.clientX -
          this.resizeContainer.nativeElement.getBoundingClientRect().left;
        this.offsetY =
          event.clientY -
          this.resizeContainer.nativeElement.getBoundingClientRect().top;
      },
    );

    this.customDocument.addEventListener('mousemove', (event) => {
      if (!this.isResizing) return;

      // Calculate new position
      const newX = event.clientX - this.offsetX;
      const newY = event.clientY - this.offsetY;

      // Apply new position
      this.resizeContainer.nativeElement.style.left = newX + 'px';
      this.resizeContainer.nativeElement.style.top = newY + 'px';
    });

    this.customDocument.addEventListener('mouseup', () => {
      this.isResizing = false;
    });
  }
}
