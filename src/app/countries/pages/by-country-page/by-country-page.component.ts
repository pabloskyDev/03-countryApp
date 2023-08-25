import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.dto';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'country-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit {
  public countries: Country[] = [];
  public isLoading: boolean = false;
  countryTerm: string = '';

  constructor(
    private countryService: CountriesService
  ){}

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byCountries.countries;
    this.countryTerm = this.countryService.cacheStore.byCountries.term;
  }

  searchByCountry(term: string): void {
    this.isLoading = true;
    this.countryService.searchCountry(term).subscribe(countries => {
      this.isLoading = false;
      this.countries = countries;
    })
  }
}
