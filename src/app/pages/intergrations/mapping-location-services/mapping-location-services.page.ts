import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapping-location-services',
  templateUrl: './mapping-location-services.page.html',
  styleUrls: ['./mapping-location-services.page.scss'],
})
export class MappingLocationServicesPage implements OnInit {

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Nextify | Mapping and Customer Location Integrations');
  }

}
