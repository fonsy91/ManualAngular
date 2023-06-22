import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { FiltrarCaracteres } from './ComponentesFormularios/formularios/validacaracteres.directive';
import {HttpClientModule} from '@angular/common/http';

//Modulos creados por mi 
import { ClientesModule } from './Modulos/clientes/clientes.module';

//Importaciones de Angular material 
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { ConceptosComponent } from './Componentes/conceptos/conceptos.component';
import { IntroComponent } from './Componentes/intro/intro.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { HijoConceptosComponent } from './Componentes/hijo-conceptos/hijo-conceptos.component';
import { ComunicacionComponent } from './Componentes/comunicacion/comunicacion.component';
import { InputOutputComponent } from './Componentes/input-output/input-output.component';
import { CicloVidaComponent } from './Componentes/ciclo-vida/ciclo-vida.component';
import { DirectivasComponent } from './ComponentesDirectivas/directivas/directivas.component';
import { BindingComponent } from './ComponentesBinding_y_Librerias/binding/binding.component';
import { FormulariosComponent } from './ComponentesFormularios/formularios/formularios.component';
import { ServiciosComponent } from './ComponentesServicios/servicios/servicios.component';
import { LibRxjsComponent } from './ComponentesRxjs/lib-rxjs/lib-rxjs.component';
import { AplicacionComponent } from './Aplicacion/aplicacion.component';

@NgModule({
  declarations: [
    AppComponent,
    ConceptosComponent,
    IntroComponent,
    HijoConceptosComponent,
    ComunicacionComponent,
    InputOutputComponent,
    CicloVidaComponent,
    DirectivasComponent,
    BindingComponent,
    FormulariosComponent,
    FiltrarCaracteres,
    ServiciosComponent,
    LibRxjsComponent,
    AplicacionComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatGridListModule,
    MatTableModule,
    MatCardModule,
    FormsModule,
    MatTabsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //Modulo creado por mi e importado aqui el padre
    ClientesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
