import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { UppercasePokemonPipe } from '../../pipes/uppercase-pokemon.pipe';
import { ReplaceLettersPipe } from '../../pipes/replace-letters.pipe';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';

@Component({
  standalone: true,
  selector: 'app-pokemon-details',
  imports: [CommonModule, RouterModule, UppercasePokemonPipe, ReplaceLettersPipe, CapitalizePipe],
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsComponent implements OnInit {
  pokemon: any = null;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) {}

  ngOnInit() {
    const idOrName = this.route.snapshot.paramMap.get('id')!;
    this.pokemonService.getPokemonDetails(idOrName).subscribe({
      next: (response) => {
        this.pokemon = response;
      },
      error: (err) => console.error('Error fetching Pokémon details:', err),
    });
  }
}
