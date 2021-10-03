import { Component, OnInit } from '@angular/core';
import * as superagent from 'superagent';
import alphaSort from 'alpha-sort';

@Component({
  selector: 'app-empowered-cities',
  templateUrl: './empowered-cities.page.html',
  styleUrls: ['./empowered-cities.page.scss'],
})
export class EmpoweredCitiesPage implements OnInit {
  cities: any = {};
  alphabets: string[] = [];

  constructor() {}

  ngOnInit() {
    superagent
      .get('https://apis.nextify.co.za/partners/metrics.json')
      .end((_, response) => {
        if (response) {
          // Sort the cities into an object of arrays
          const cities = response.body.cities;
          // eslint-disable-next-line guard-for-in
          for (const city of cities) {
            if (this.cities[city[0]] === undefined) {
              this.alphabets.push(city[0]);
              this.cities[city[0]] = [];
            }

            this.cities[city[0]].push(city);
          }

          console.log(this.alphabets, this.cities);
        }
      });
  }
}
