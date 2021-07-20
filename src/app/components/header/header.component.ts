import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() isScrolledPage = false;
  @Input() isShowLogo = true;
  constructor() { }

  ngOnInit() {}

  scrollEvent(event) {
    event.target.getScrollElement()
      .then((scrollElement) => {
        const scrollTop = scrollElement.scrollTop;
        if (scrollTop > 0) {
          this.isScrolledPage = true;

          // For hiding the logo
          const scrollPercentage = (scrollTop / scrollElement.scrollHeight) * 100;
          if (scrollPercentage > 70) {
            this.isShowLogo = false;
          } else {
            this.isShowLogo = true;
          }
        } else {
          this.isScrolledPage = false;
        }
      });
  }
}
