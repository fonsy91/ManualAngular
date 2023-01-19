import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConceptosComponent } from './Componentes/conceptos/conceptos.component';
import { IntroComponent } from './Componentes/intro/intro.component';

const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'conceptos', component: ConceptosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
