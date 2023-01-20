import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ciclo-vida',
  templateUrl: './ciclo-vida.component.html',
  styleUrls: ['./ciclo-vida.component.css']
})
export class CicloVidaComponent implements OnInit{

  @Input() entradaHijo: string = '';
  contador: number = 0;

  constructor() { 

  }

  ngOnInit(){
    this.mostrar("Pasamos por ngOnInit");
  }

  ngOnChanges(cambios: SimpleChanges){
    for(let propiedad in cambios) {
      let cambio = cambios[propiedad];
      let actual = JSON.stringify(cambio.currentValue);
      let anterior = JSON.stringify(cambio.previousValue);

      this.mostrar("Pasa por ngOnChanges. Propiedad (" + propiedad + ") valor actual (" + actual + ") valor anterior (" + anterior + ")");
    }    
  }

  ngDoCheck() { 
    this.mostrar("pasa por ngDoCheck");
  }

  ngAfterContentInit() { 
    this.mostrar("pasa por ngAfterContentInit"); 
  }

  ngAfterContentChecked() { 
    this.mostrar("pasa por ngAfterContentChecked"); 
  }

  ngAfterViewInit() { 
    this.mostrar("pasa por ngAfterViewInit");
  }

  ngAfterViewChecked() { 
    this.mostrar("pasa porngAfterViewChecked"); 
  }


  //Metodos
  mostrar(texto: string){
    this.contador += 1;
    console.log(this.contador+" - "+texto);
  }

}
