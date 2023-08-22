import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, map, delay } from "rxjs";
import { Country } from '../interfaces/country.dto';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private url = `https://restcountries.com/v3.1`;
  constructor(
    private http: HttpClient
  ) { }

  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    const url = `${this.url}/alpha/${code}`;
    return this.http.get<Country[]>(url)
      .pipe(
        map( countries => countries.length > 0 ? countries[0] : null ),
        catchError( () => of(null) )
      )
  }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.url}/capital/${term}`;
    return this.getHttpRequest(url);
  }

  searchCountry( term: string): Observable<Country[]> {
    const url = `${this.url}/name/${term}`;
    return this.getHttpRequest(url);
  }

  searchRegion( region: string ): Observable<Country[]> {
    const url = `${this.url}/region/${region}`;
    return this.getHttpRequest(url);
  }

  private getHttpRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(() => of([])),
        // delay(1000),
      )
  }
}
