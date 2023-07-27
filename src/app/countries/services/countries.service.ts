import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Country } from '../interfaces/country.dto';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private url = `https://restcountries.com/v3.1`;
  constructor(
    private http: HttpClient
  ) { }

  searchCapital(term: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.url}/capital/${term}`);
  }
}
