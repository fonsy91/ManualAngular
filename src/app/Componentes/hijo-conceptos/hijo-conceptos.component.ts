import { Component } from '@angular/core';
import {Attribute, HostListener } from '@angular/core';

@Component({
  selector: 'app-hijo-conceptos',
  templateUrl: './hijo-conceptos.component.html',
  styleUrls: ['./hijo-conceptos.component.css']
})
export class HijoConceptosComponent {

  contaClick: number = 0;
  contaOver: number = 0;
  valor: string = '';

  constructor( @Attribute('miAtributo') atributo:any){
    console.log('El valor de atributo es: '+atributo);
    this.valor=atributo
  }

  @HostListener('click', ['$event'])
  onHostClick(event: Event) {
    console.log("click en app " + event);
    this.contaClick += 1;
  }

  @HostListener('mouseover', ['$event'])
  onMouseOver(event: Event) {
    console.log("mouseover" + event);
    this.contaOver += 1;
  }
}
