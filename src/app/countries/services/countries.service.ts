import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, map, tap } from "rxjs";
import { Country } from '../interfaces/country.dto';
import { CacheStore } from '../interfaces/cache-store.dto';
import { Region } from '../interfaces/region.type';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private url = `https://restcountries.com/v3.1`;
  public cacheStore: CacheStore = {
    byCapital: {term: '', countries: []},
    byCountries: {term: '', countries: []},
    byRegion: {region: '', countries: []},
  }

  constructor(
    private http: HttpClient
  ) {
    this._loadFromLocalStorage();
  }

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
    return this.getHttpRequest(url)
      .pipe(
        tap( countries => this.cacheStore.byCapital = {term, countries}),
        tap(() => this._saveToLocalStorage()),
      )
  }

  searchCountry( term: string): Observable<Country[]> {
    const url = `${this.url}/name/${term}`;
    return this.getHttpRequest(url)
      .pipe(
        tap( countries => this.cacheStore.byCountries = {term, countries}),
        tap(() => this._saveToLocalStorage()),
      );
  }

  searchRegion( region: Region ): Observable<Country[]> {
    const url = `${this.url}/region/${region}`;
    return this.getHttpRequest(url)
      .pipe(
        tap( countries => this.cacheStore.byRegion = {region, countries}),
        tap(() => this._saveToLocalStorage()),
      );
  }

  private getHttpRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(() => of([])),
        // delay(1000),
      )
  }

  private _saveToLocalStorage() {
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore))
  }

  private _loadFromLocalStorage() {
    if(!localStorage.getItem('cacheStore')) return;

    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
  }
}
