import { Component, OnInit } from '@angular/core';
import { fromEvent, scan } from 'rxjs';

@Component({
  selector: 'app-lib-rxjs',
  templateUrl: './lib-rxjs.component.html',
  styleUrls: ['./lib-rxjs.component.css']
})
export class LibRxjsComponent implements OnInit{

  //Variables 
  activaAlerta: boolean = false; 
  contador: number = 0;

  constructor(){}

  ngOnInit(): void {
    this.Clicks();
    this.numClicks();
  }

  //Nos suscribimos a un futuro evento que en este caso es un click del raton 
  //y en el momento que suceda informaremos por consola.
  Clicks(){
    fromEvent(document, 'click').subscribe(() => this.activaAlerta=true);
  }

  //Contamos el numero de clicks hechos en pantalla 
  //scan es una funcion a la que le pasamos un contador y el estado inicial 0.
  numClicks(){
    fromEvent(document, 'click')
      .pipe(scan((count) => count+1,0))
      .subscribe((count) => this.contador = count);
  }



}
