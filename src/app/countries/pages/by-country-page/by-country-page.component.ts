import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.dto';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'country-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {
  public countries: Country[] = [];
  public isLoading: boolean = false;

  constructor(
    private countryService: CountriesService
  ){}

  searchByCountry(term: string): void {
    this.isLoading = true;
    this.countryService.searchCountry(term).subscribe(countries => {
      this.isLoading = false;
      this.countries = countries;
    })
  }
}
