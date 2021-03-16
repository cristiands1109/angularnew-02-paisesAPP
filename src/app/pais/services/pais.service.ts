import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Country } from '../interfaces/paise.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {


  private apiURL: string = 'https://restcountries.eu/rest/v2'

  endpoint='/name/united'


  get httpParams(){
    return new HttpParams().set('fields', 'name;capital;alpha2Code;flag;population') 
  }


  constructor( private http: HttpClient) { }

  // agregar el interface
  buscarPais(termino: string): Observable<Country[]> {

    const url: string = `${this.apiURL}/name/${termino}`;
    return this.http.get<Country[]>(url)

  }

  buscarCapital(termino: string): Observable<Country[]> {

    const url: string =`${this.apiURL}/capital/${termino}`;

    return this.http.get<Country[]>(url, {params: this.httpParams});

  }


  getCodigoPais(id: string): Observable<Country> {

    const url: string =`${this.apiURL}/alpha/${id}`;

    return this.http.get<Country>(url);

  }

  getRegion(region: string): Observable<Country[]> {

    
    const url: string = `${this.apiURL}/region/${region}`
    return this.http.get<Country[]>(url, {params: this.httpParams}).pipe(tap(console.log))
  }


}
