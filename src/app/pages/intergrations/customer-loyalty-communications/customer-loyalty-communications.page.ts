import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-loyalty-communications',
  templateUrl: './customer-loyalty-communications.page.html',
  styleUrls: ['./customer-loyalty-communications.page.scss'],
})
export class CustomerLoyaltyCommunicationsPage implements OnInit {

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Nextify | Customer Loyalty and Communications Integrations');
  }

}
