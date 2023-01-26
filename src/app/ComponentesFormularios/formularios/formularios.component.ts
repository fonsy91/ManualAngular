import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';



@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})

export class FormulariosComponent implements OnInit{

  //Constructor de la clase 
  constructor(private readonly fb: FormBuilder){}

  //Metodo de inicio de componente 
  ngOnInit(): void {
      this.formularioReactivo = this.initForm();
      this.onPathValue();
      //this.onSetValue();
  }

  codigo: string = "";
  nombre: string = "";
  edad: string = "";
  opcion: string = "";
  sexo: string = "Hombre";
  comentarios: string = "";
  activar: boolean = true;

  mostrarVar() {
    console.log(
      "Codigo (" + this.codigo + ")"
      + "Nombre ("+this.nombre+")"
      + "Nombre ("+this.edad+")"
      + "Nombre ("+this.opcion+")"
      + "Nombre ("+this.sexo+")"
      + "Nombre ("+this.comentarios+")"
      + "Nombre ("+this.activar+")"
    );
  }

  onSubmit(){
    console.log("Submit");
  }

  /******************************************* */
  modelo = {
    nombre: "Juanito",
    checkAdult: false,
    departament: "",
    comment: ""
  }

  botonEnviar(form: NgForm){
    console.log("Valores del formualrio: ", form);
    console.log("Valores del formualrio: "+ form);
  }

  /******************************************* */
  
  modelo2 = {
    pass: ""
  }


  botonSend(form: NgForm){
    console.log("Valores del formualrio: ", form);
    console.log("Valores del formualrio: "+ form);
  }

  //Formularios reactivos ******************************
  //propiedad del formulario como no la inicializamos colocamos signode exclamacion 
  formularioReactivo!: FormGroup;

  EnviarReactivo(){
    console.log("Formulario reactivo enviado");
  }

  //Metodo que devuelve un formGroup
  initForm(): FormGroup{
    //group es un metodo que espera un objeto y ese objeto sera la definicion de nuestros campos 
    //y un array de una validacion o mas de una. El fb viene de formBuilder en el constructor.
    return this.fb.group({
      nombre2: ['',[Validators.required, Validators.minLength(3)]],
      checkAdult: ['',[Validators.required]],
      departament: [''],
      comment: ['',[Validators.required]],
    })
  }

  //Metodo path de angular respecto a formularios. Al inicializar el componente 
  //esto coloca en el campo elegido el nombre Alfonso. 
  onPathValue():void{
    this.formularioReactivo.patchValue({nombre2: 'Alfonso'});
  }

  //Esto lo que hace es hacer un set en el formulario lo que pasa que debe hacerse 
  //para todos los campos del formulario. Es mejor usar el patch.
  onSetValue():void{
    this.formularioReactivo.setValue({comment: 'Hola mundo'})

  }

}
