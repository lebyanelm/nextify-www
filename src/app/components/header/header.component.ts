import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() isScrolledPage = false;
  constructor() { }

  ngOnInit() {}

  scrollEvent(event) {
    event.target.getScrollElement()
      .then((scrollElement) => {
        const scrollTop = scrollElement.scrollTop;
        if (scrollTop > 0) {
          this.isScrolledPage = true;
        } else {
          this.isScrolledPage = false;
        }
      });
  }
}
