import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intergrations',
  templateUrl: './intergrations.page.html',
  styleUrls: ['./intergrations.page.scss'],
})
export class IntergrationsPage implements OnInit {

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Nextify | Our third-party services implementations');
  }

}
