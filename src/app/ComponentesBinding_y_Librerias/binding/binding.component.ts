import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {

  //PARTE 1
  Libro = {"titulo":"Hamlet", "autor": "William Shakespeare", "precio":21.30, "stock":5, "cantidad":5, "imagen":"assets/Imagenes/libros.jpg"};

  //PARTE 2
  downCantidad(libro: any){
    if (libro.cantidad > 0 ){
      libro.cantidad--;
    } 
  }

  upCantidad(libro: any){
    if (libro.cantidad < libro.stock ) {
      libro.cantidad++;
    }
  }

  getCoord(event: any) { 
    console.log(event.clientX + ", " + event.clientY); 
  }

}
