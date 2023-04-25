import { Injectable } from '@angular/core';
import { Cliente, Grupo } from '../Modulos/clientes/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  /*
    1.Las dos propiedades del servicio contienen los datos que va a mantener. Sin embargo, las hemos definido como privadas, de modo que no se puedan tocar 
      directamente y tengamos que usar los métodos del servicio creados para su acceso.
    2.Los grupos los construyes con un literal en el constructor. Generalmente los traerías de algún servicio REST o algo parecido, pero de momento está bien para empezar.
    3.Agregar un cliente es un simple "push" al array de clientes, de un cliente recibido por parámetro.
    4.Crear un nuevo cliente es simplemente devolver un nuevo objeto, que tiene que respetar la interfaz, ya que en la función nuevoCliente() 
      se está especificando que el valor de devolución será un objeto del tipo Cliente.
    5. Fíjate que en general está todo tipado, tarea opcional pero siempre útil.
  */

  private clientes!: Cliente[];
  private grupos!: Grupo[];

  constructor() { 
    this.grupos = [
      {
        id: 0,
        nombre: 'Sin definir'
      },
      {
        id: 1,
        nombre: 'Activos'
      },
      {
        id: 2,
        nombre: 'Inactivos'
      },
      {
        id: 3,
        nombre: 'Deudores'
      },
    ];
    this.clientes = [];
  }

  getGrupos() {
    return this.grupos;
  }

  getClientes() {
    return this.clientes;
  }

  agregarCliente(cliente: Cliente) {
    this.clientes.push(cliente);
  }

  nuevoCliente(): Cliente {
    return {
      id: this.clientes.length,
      nombre: '',
      cif: '',
      direccion: '',
      grupo: 0
    };
  }




}
