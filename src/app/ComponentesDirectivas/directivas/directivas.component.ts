import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {


/*EJEMPLO 1***********************/
fondoAmarillo: boolean = false;
letraGrande: boolean = false;

checkFondo(){
  this.fondoAmarillo=!this.fondoAmarillo;
}

checkLetra(){
  this.letraGrande=!this.letraGrande;
}

asignaClases(){
  let classes = {
    fa: this.fondoAmarillo,
    lg: this.letraGrande
  };
  
  return classes;
}
/*********************************/


/*EJEMPLO 2***********************/
grupo1 = false;
grupo2 = false;
subgrupo11 = false;
subgrupo12 = false;
subgrupo21 = false;
subgrupo22 = false;
/*********************************/

/*EJEMPLO 2***********************/
//Array de objetos 
public nombres = [
  {nom:"uno",edad:10},
  {nom:"dos",edad:20},
  {nom:"tres",edad:30}
];

/*********************************/

/*EJEMPLO 4***********************/
opcion: string = '';

/*********************************/

/*EJEMPLO 5***********************/
nombre: string = '';
nombre2: string = '';

cambiaNombre(evento: any) {
  this.nombre=this.nombre.toLowerCase();
  this.nombre2=this.nombre.toUpperCase();
}

cambiaNombre2(evento: any) {
  this.nombre2=this.nombre2.toUpperCase();
  this.nombre=this.nombre2.toLowerCase();
}

/*********************************/

/*EJEMPLO 6***********************/
color = 'blue';
hayLetraGrande:boolean = false;
hayColorFondo:boolean = false;
hayLetraColor:boolean = false;
hayLetraItalica:boolean = false;

defineEstilos(){
  let styles= {
    'font-size': this.hayLetraGrande ? '300%' : 'initial',
    'background-color': this.hayColorFondo ? '#58FA58' :
    '#FFFFFF',
    'color': this.hayLetraColor ? 'red' : 'black',
    'font-style': this.hayLetraItalica ? 'italic' : 'normal'
  };
  return styles;
}

/*********************************/

/*EJERCICIO FINAL***********************/
mostrar = false;
numeros:number [] = [1,2,3,4,5,6];
pares:boolean = true; impares:boolean = true;
colorPar:string= 'blue'; 
colorImpar:string = 'red';

clActividad(valor:any){
  let classes = { activo: valor, inactivo: !valor };
  return classes;
}

/*********************************/

}
