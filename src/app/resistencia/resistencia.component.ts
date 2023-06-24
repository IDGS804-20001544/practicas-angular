import { Component } from '@angular/core';

interface Banda {
  valor: string;
  vista: string;
  color: string;
  textoColor: string;
}

@Component({
  selector: 'app-resistencia',
  templateUrl: './resistencia.component.html',
  styleUrls: ['./resistencia.component.css']
})
export class ResistenciaComponent {
  valor1!: string;
  valor2!: string;
  valor3!: string;
  tolerancia!: string;
  resistencia!: number;
  minimo!: number;
  maximo!: number;

  banda1!: number;
  banda2!: number;
  banda3!: number;

  bandas: Banda[] = [
    { valor: 'black', vista: 'Negro', color: 'black', textoColor: 'white' },
    { valor: 'brown', vista: 'Cafe', color: 'brown', textoColor: 'white' },
    { valor: 'red', vista: 'Rojo', color: 'red', textoColor: 'white' },
    { valor: 'orange', vista: 'Naranja', color: 'orange', textoColor: 'white' },
    { valor: 'yellow', vista: 'Amarillo', color: 'yellow', textoColor: 'black' },
    { valor: 'green', vista: 'Verde', color: 'green', textoColor: 'white' },
    { valor: 'blue', vista: 'Azul', color: 'blue', textoColor: 'white' },
    { valor: 'purple', vista: 'Morado', color: 'purple', textoColor: 'white' },
    { valor: 'gray', vista: 'Gris', color: 'gray', textoColor: 'white' },
    { valor: 'white', vista: 'Blanco', color: 'white', textoColor: 'black' }
  ];

  calcularResistencia() {
    const bandas: { [key: string]: number } = {
      black: 0,
      brown: 1,
      red: 2,
      orange: 3,
      yellow: 4,
      green: 5,
      blue: 6,
      purple: 7,
      gray: 8,
      white: 9
    };
  
    const valores = [this.valor1, this.valor2, this.valor3];
    this.banda1 = bandas[valores[0]];
    this.banda2 = bandas[valores[1]];
    this.banda3 = bandas[valores[2]];
    this.resistencia = (bandas[valores[0]] * 10 + bandas[valores[1]]) * Math.pow(10, bandas[valores[2]]);
  
    if (this.tolerancia === 'oro') {
      this.minimo = this.resistencia - (this.resistencia * 0.05);
      this.maximo = this.resistencia + (this.resistencia * 0.05);
    } else if (this.tolerancia === 'plata') {
      this.minimo = this.resistencia - (this.resistencia * 0.1);
      this.maximo = this.resistencia + (this.resistencia * 0.1);
    } else {
    }
  }
}
