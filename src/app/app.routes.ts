import { Routes } from '@angular/router';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { PokeballComponent } from './components/pokeball/pokeball.component';

export const routes: Routes = [
    { path: '', component: PokemonListComponent },
    { path: 'details/:id', component: PokemonDetailsComponent },
    { path: 'pokeball', component: PokeballComponent },
];
