import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesService } from '../../Servicios/clientes.service';
import { FormsModule } from '@angular/forms';
import { AltaClienteComponent } from 'src/app/ComponentesServicios/alta-cliente/alta-cliente.component';
import { ListadoClientesComponent } from 'src/app/ComponentesServicios/listado-clientes/listado-clientes.component';

@NgModule({
  declarations: [
    AltaClienteComponent,
    ListadoClientesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [ClientesService],
  //El export se usa para poder usar el componente que va dentro 
  //en otros componentes 
  exports: [
    AltaClienteComponent,
    ListadoClientesComponent,
  ],
})
export class ClientesModule { }
