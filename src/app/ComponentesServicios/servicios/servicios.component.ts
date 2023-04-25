import { Component, OnInit } from '@angular/core';
import { ArticulosService } from 'src/app/Servicios/articulos.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit{

  articulos: any;

  //Inyeccion de dependencias, el servicio articulosService
  constructor(private articulosService: ArticulosService) {}

  //Metodo de inicializador del componente
  ngOnInit(): void {
    this.articulosService.retornar().subscribe( result => {
      this.articulos = result
    });
  }


}



//Array de objetos de tipo Libro
const LIBROS: Libro[] = [
  {"id": 1 ,"titulo": "El Quijote" ,"autor": "Cervantes"}, 
  {"id": 2 ,"titulo": "Hamlet" ,"autor": "Shakespeare"}
];

//Defincion de cada apartado de un libro
class Libro{
  id!: number; 
  titulo!: string; 
  autor!: string;
}
