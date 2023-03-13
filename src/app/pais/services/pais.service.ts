import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1'

  private apiUrl2: string = 'https://restcountries.com/v2'

  constructor(private http: HttpClient ) { }

  buscarPais(termino: string): Observable<Country[]>{

    const url = `${this.apiUrl}/name/${termino}`;

    return this.http.get<Country[]>(url);

    // return this.http.get(url).pipe(
    //   catchError(err => of([]))
    // );
  }

  buscarCapital(termino: string): Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${termino}`;

    return this.http.get<Country[]>(url);
  }

  getPaisPorAlpha(termino: string): Observable<Country[]>{
    const url = `${this.apiUrl}/alpha?codes=${termino}`;

    return this.http.get<Country[]>(url);
  }

  buscarRegion(region:string): Observable<Country[]>{
    const url = `${this.apiUrl}/region/${region}`;

    return this.http.get<Country[]>(url);
  }

  // /regionalbloc/eu

}
