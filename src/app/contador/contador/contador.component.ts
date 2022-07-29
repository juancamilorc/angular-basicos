import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
        template: `
        
        <h1>{{ titulo }}</h1>

        <h3>La base es: <strong>{{base}}</strong></h3>
        
        <button (click) ="acumular( base )" > + {{base}}</button> <!-- Angular sabe que el click es un evento y sabe realizar la accion que se encuentra entre comillas --> 
        
        <span> {{ numero }} </span>
        
        <button (click) ="acumular( -base )"> - {{base}} </button>

        `
})
export class ContadorComponent {
    titulo: string = 'Contador App';
    numero:number = 10;
    base: number = 10;

    acumular(base: number) {
        this.numero += base;
  }
}