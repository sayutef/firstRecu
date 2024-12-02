import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private readonly baseUrl = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) {}

  getPokemonList(limit: number = 15): Observable<any> {
    return this.http.get(`${this.baseUrl}pokemon?limit=${limit}`);
  }

  getPokemonDetails(idOrName: string): Observable<any> {
    return this.http.get(`${this.baseUrl}pokemon/${idOrName}`);
  }
}
