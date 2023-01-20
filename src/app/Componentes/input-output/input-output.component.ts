import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent {

  /*CODIGO DEL HIJO*/
  @Input() texto:string ='';
  @Output() eventoHijo = new EventEmitter<string>();
  InputHijo: string = '';

  enviarPadre() {  
    this.eventoHijo.emit(this.InputHijo)
  }

}
