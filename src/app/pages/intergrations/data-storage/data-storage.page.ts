import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-storage',
  templateUrl: './data-storage.page.html',
  styleUrls: ['./data-storage.page.scss'],
})
export class DataStoragePage implements OnInit {

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Nextify | Data Storage Integrations');
  }

}
