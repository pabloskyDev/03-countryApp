import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.dto';

@Component({
  selector: 'country-country-table',
  templateUrl: './country-table.component.html',
  styles: [
  ]
})
export class CountryTableComponent {
  @Input() countries: Country[] = [];
}
