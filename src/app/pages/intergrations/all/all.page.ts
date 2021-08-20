import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all',
  templateUrl: './all.page.html',
  styleUrls: ['./all.page.scss'],
})
export class AllPage implements OnInit {

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Nextify | All integrations');
  }

}
