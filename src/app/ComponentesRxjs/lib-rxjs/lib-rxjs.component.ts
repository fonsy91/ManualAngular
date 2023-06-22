import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, filter, from, map, merge, of } from 'rxjs';

@Component({
  selector: 'app-lib-rxjs',
  templateUrl: './lib-rxjs.component.html',
  styleUrls: ['./lib-rxjs.component.css']
})
export class LibRxjsComponent implements OnInit, OnDestroy{

  //Variables 

  constructor(){}

  ngOnInit(): void {
    this.ejemPrimero();
    this.ejemSegundo();
    this.ejemTercero();
    this.ejemCuarto();
    this.ejemQuinto();
  }

  ejemPrimero(): void {
    const observable = new Observable((subscriber) => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });

    console.log('Justo antes de subscribe');
    // Escucha al observable hasta que emite sus valores y los muestra por consola
    observable.subscribe({
      next(x){
        console.log('Obtiene valor ',x);
      },
      error(err){
        console.error('Hubo un error al subscribirse: '+ err);
      },
      complete(){
        console.log('La subscripcion se ha realizado con exito');
      }
    });
    console.log('Justo despues de subscribe');
  }

  ejemSegundo(): void {
    const observable = from([10,20,30]);
    const subscription = observable.subscribe((x) => console.log(x));
    // Nos dessuscribimos
    subscription.unsubscribe();
  }

  ejemTercero(): void {
    // Creamos un Observable con el metod of
    of(1,2,3).pipe(map((x) => x*x)).subscribe((v) => {
      //map aplica una funcion x*x a cada valor emitido por el Observable of
      // y emite los valores resultantes como un Observable
      console.log('Valores: ',v);
    });
  }

  ejemCuarto(): void {
    // Filtramos los valores pares del stream de datos que me devuelve el Observable
    of(1,2,3,4,5,6).pipe(filter(x => x % 2 === 0)).subscribe(v =>{
      console.log('Valores pares: ',v);
    });
  }

  ejemQuinto(): void {
    // Con merge unes dos streams de datos de diferentes Observables
    const numeros1 = of(1,2,3,4);
    const numeros2 = of(5,6,7,8);
    const unionNumeros = merge(numeros1,numeros2);
    // Me suscriboi al observable y muestro todos los numeros
    unionNumeros.subscribe(res => console.log(res));
  }


  ngOnDestroy(): void {
    
  }


}
