import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";


@Directive({
    selector: '[filtrar-caracteres]',
    providers:[
        {provide: NG_VALIDATORS, multi: true, useExisting: FiltrarCaracteres}
    ]
})

export class FiltrarCaracteres implements Validator{
    validate(caracter: AbstractControl<any, any>): ValidationErrors | null {
        if (caracter.value == null){
            return null;
        } 
        var contenido = caracter.value;
        for(var i = 0; i < contenido.length; i++){
            var letra = contenido.substr(i,1);
            var valor = letra.charCodeAt(0);
            if (!(valor >=65 && valor <= 90)){
                return {filtrarCaracteres: true};
            }
        }
        return null;
    }
    
}