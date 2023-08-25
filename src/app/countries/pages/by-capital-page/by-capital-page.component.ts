import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.dto';

@Component({
  selector: 'country-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit {
  public countries: Country[] = [];
  public isLoading: boolean = false;
  capitalTerm: string = '';

  constructor(
    private countryService: CountriesService
  ) {}

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byCapital.countries;
    this.capitalTerm = this.countryService.cacheStore.byCapital.term;
  }

  searchByCapital(term: string): void {
    this.isLoading = true;
    this.countryService.searchCapital(term).subscribe(countries => {
      this.isLoading = false;
      this.countries = countries;
    })
  }
}
