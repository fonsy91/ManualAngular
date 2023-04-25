import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../Servicios/clientes.service';
import { Cliente, Grupo } from '../../Modulos/clientes/cliente.model';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent implements OnInit{

  /*
    1.El componente declara un par de propiedades, el cliente y el array de grupos.
    2.En el constructor, que se ejecuta lo primero, conseguimos una instancia del servicio de clientes, mediante la inyección de dependencias.
    3.Posteriormente se ejecuta ngOnInit(). En este punto ya se ha recibido el servicio de clientes, por lo que lo puedo usar para generar los valores que 
      necesito en las propiedades del componente.
    4.El método nuevoCliente() es el que se ejecutará cuando, desde el formulario de alta, se produzca el envío de datos. En este código usamos el 
      servicio clientesService, para agregar el cliente y generar un cliente nuevo, para que el usuario pueda seguir dando de alta clientes sin machacar los clientes anteriormente creados.
  */

  cliente!: Cliente;
  grupos!: Grupo[];

  constructor(private clientesService: ClientesService){}


  ngOnInit(): void {
    this.cliente = this.clientesService.nuevoCliente();
    this.grupos = this.clientesService.getGrupos();
  }

  nuevoCliente(): void {
    this.clientesService.agregarCliente(this.cliente);
    this.cliente = this.clientesService.nuevoCliente();
  }

}
