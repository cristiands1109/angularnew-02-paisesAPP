import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/paise.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {


  private apiURL: string = 'https://restcountries.eu/rest/v2'

  endpoint='/name/united'

  constructor( private http: HttpClient) { }

  // agregar el interface
  buscarPais(termino: string): Observable<Country[]> {

    const url: string = `${this.apiURL}/name/${termino}`;
    return this.http.get<Country[]>(url)

  }

  buscarCapital(termino: string): Observable<Country[]> {

    const url: string =`${this.apiURL}/capital/${termino}`;

    return this.http.get<Country[]>(url);

  }


  getCodigoPais(id: string): Observable<Country> {

    const url: string =`${this.apiURL}/alpha/${id}`;

    return this.http.get<Country>(url);

  }


}
