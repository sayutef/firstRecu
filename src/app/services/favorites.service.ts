
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', 
})
export class FavoritesService {
  private favorites: string[] = [];

  constructor() {}


  addFavorite(pokemonName: string): void {
    if (this.favorites.length < 5 && !this.favorites.includes(pokemonName)) {
      this.favorites.push(pokemonName);
    }
  }

  
  removeFavorite(pokemonName: string): void {
    this.favorites = this.favorites.filter((name) => name !== pokemonName);
  }

  
  getFavorites(): string[] {
    return [...this.favorites]; 
  }
}
