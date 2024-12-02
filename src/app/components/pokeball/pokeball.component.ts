import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  standalone: true,
  selector: 'app-pokeball',
  templateUrl: './pokeball.component.html',
  imports: [CommonModule, RouterModule],
  styleUrls: ['./pokeball.component.scss'],
})
export class PokeballComponent {
  favorites: string[] = []; 

  constructor(private favoritesService: FavoritesService) {
    this.favorites = this.favoritesService.getFavorites(); 
  }
}
