import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  nombre!:string;
  compradores!:number;
  boletos!:number;
  resultado!:number;
  radio!:string;
  costo:number = 0;
  x!:boolean;
  y!:boolean;


  calcular(){
    if((7 * this.compradores) >= this.boletos ) {
      this.x=true;
      this.y=false;
      this.costo = this.boletos * 12

      if(this.boletos > 5){
        this.resultado = this.costo-(0.15 * this.costo)
      }else if(this.boletos == 3 || this.boletos == 4 || this.boletos == 5){
        this.resultado = this.costo-(0.10 * this.costo)
      }else{
        this.resultado = this.costo
      }

      if(this.radio =='si'){
        this.resultado = this.resultado-(0.10 * this.resultado)
      }
      
    }else{
      this.y=true;
      this.x=false;
    }  
  }  
}
