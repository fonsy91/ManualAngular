import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription, delay, filter, from, fromEvent, interval, map, merge, of, single, takeUntil, tap, timestamp } from 'rxjs';

@Component({
  selector: 'app-lib-rxjs',
  templateUrl: './lib-rxjs.component.html',
  styleUrls: ['./lib-rxjs.component.css']
})
export class LibRxjsComponent implements OnInit, OnDestroy{

  //Variables 

  constructor(){}

  ngOnInit(): void {
    // this.ejemPrimero();
    // this.ejemSegundo();
    // this.ejemTercero();
    // this.ejemCuarto();
    // this.ejemQuinto();
    // this.ejemploOnce();
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

  ejemSexto(): void {
    of(1,2,3,4).pipe(map((number:number) => number*number), tap((result:number) => console.log(result))).subscribe(res => {
      console.log(res);
    });
  }

  ejemSeptimo(): void {
    // Pasara un segundo y medio y despues apareceran los datos por consola
    of(1,2,3,4).pipe(delay(1500), tap(res => console.log(res))).subscribe();
  }

  ejemploOctavo(): void {
    of(1,2,3,4).pipe(timestamp(), tap(res => console.log(res))).subscribe();
  }

  // Metodo para la prueba de takeUnitl
  private stop$ = new Subject<number>();
  counter!: number;

  start(){
    interval(1000).pipe(
      // Va ha emitir hasta que 
      takeUntil(this.stop$),
      tap((val:number) => this.counter= val)
    ).subscribe(val => console.log(val));
  }

  stop(){
    // Detenemos el observable
    this.stop$.next(0);
  }
  // -------------------------------

  ejemploNoveno() {
    // Uso de single()
    of(1,2,3,4,5,6).pipe(single((num: number) => num === 3), tap(res => console.log(res))).subscribe();
  }

  ejemploDecimo() {
    // Uso de fromEvent
    const document$ = fromEvent(document, 'click');
    document$.pipe(tap(res => console.log(res))).subscribe();
  }

  // Seleccionamos un elemento del DOM
  @ViewChild('myButton', {static: true}) myButton!: ElementRef;
  ejemploOnce() {
    const document$ = fromEvent(this.myButton.nativeElement, 'click');
    document$.pipe(tap(res => console.log(res))).subscribe();
  }

  // Observables de tipos Subject
  mySubject = new Subject<string>();
  
  // Subject de tipo BehaviorSubject
  myBehaviorSubject = new BehaviorSubject<string>('Valor inicial');

  // Si en tenemos mas de un observable corriendo lo normal es crearse un 
  // array de Suscripciones e ir haciendo push aqui y en el metodo Destroy te desuscribes
  private suscription: Subscription[] = [];
  datos$ = interval(1000);

  ejemploDoce() {
    this.suscription.push(
      this.datos$.pipe(tap(res => console.log(res))).subscribe()
    );
  }

  ngOnDestroy(): void {
    this.suscription.forEach(subs => subs.unsubscribe());
  }


}
