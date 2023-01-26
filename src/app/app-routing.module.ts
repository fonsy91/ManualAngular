import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConceptosComponent } from './Componentes/conceptos/conceptos.component';
import { IntroComponent } from './Componentes/intro/intro.component';
import { BindingComponent } from './ComponentesBinding_y_Librerias/binding/binding.component';
import { DirectivasComponent } from './ComponentesDirectivas/directivas/directivas.component';
import { FormulariosComponent } from './ComponentesFormularios/formularios/formularios.component';

const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'conceptos', component: ConceptosComponent },
  { path: 'directivas', component: DirectivasComponent },
  { path: 'binding', component: BindingComponent },
  { path: 'formularios', component: FormulariosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
