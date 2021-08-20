import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments-transaction-services',
  templateUrl: './payments-transaction-services.page.html',
  styleUrls: ['./payments-transaction-services.page.scss'],
})
export class PaymentsTransactionServicesPage implements OnInit {

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Nextify | Payments and Transactions Integrations');
  }

}
