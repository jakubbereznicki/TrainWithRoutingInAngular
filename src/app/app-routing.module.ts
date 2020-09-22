import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { DetailsComponent } from './listOfNumbers/details/details.component';
import { NumberComponent } from './listOfNumbers/number/number.component';

const routes: Routes = [
  {
    path: '',
    component: NumberComponent
  },
  {
    path: 'artykul/:id',
    component: DetailsComponent,
  }

]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
