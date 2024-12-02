
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../services/pokemon.service';
import { RouterModule } from '@angular/router';
import { FavoritesService } from '../../services/favorites.service';

import { UppercasePokemonPipe } from '../../pipes/uppercase-pokemon.pipe';
import { ReplaceLettersPipe } from '../../pipes/replace-letters.pipe';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, UppercasePokemonPipe, ReplaceLettersPipe, CapitalizePipe],
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  favorites: string[] = [];

  constructor(
    private pokemonService: PokemonService,
    private favoritesService: FavoritesService
  ) {}

  ngOnInit() {
    
    this.pokemonService.getPokemonList().subscribe({
      next: (response) => {
        this.pokemons = response.results.map((pokemon: any, index: number) => ({
          ...pokemon,
          id: index + 1,
          favorite: this.favoritesService.getFavorites().includes(pokemon.name),
        }));
      },
      error: (err) => console.error('Error fetching Pokémon list:', err),
    });

    
    this.favorites = this.favoritesService.getFavorites();
  }

  toggleFavorite(pokemon: any) {
    if (pokemon.favorite) {
      
      this.favoritesService.removeFavorite(pokemon.name);
    } else {
      if (this.favorites.length >= 5) {
        
        alert('Solo puedes tener un máximo de 5 Pokémon favoritos.');
        return;
      }
      
      this.favoritesService.addFavorite(pokemon.name);
    }
  
    
    pokemon.favorite = !pokemon.favorite;
    this.favorites = this.favoritesService.getFavorites(); 
  }
  
}
