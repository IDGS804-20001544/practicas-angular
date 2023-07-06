import { Component } from '@angular/core';

interface Pedido {
  id:number;
  tamano: string;
  ingredientes: string;
  numPizzas: number;
  subtotal: number;
}

interface Clientes{
  nombre:string;
  subtotal:number;
}

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent {
  nombre!: string;
  direccion!: string;
  telefono!: number;
  tamanoPizzas!: string;
  numPizzas!: number;
  total!: number;

  ingredientes = [
    { nombre: 'Jamón', precio: 10, checked: false },
    { nombre: 'Piña', precio: 10, checked: false },
    { nombre: 'Champiñones', precio: 10, checked: false }
  ];

  pedidos: Pedido[] = [];

  clientes: Clientes[]=[];
  getIngredientesSeleccionados() {
    const ingredientesSeleccionados = this.ingredientes
      .filter(ingrediente => ingrediente.checked)
      .map(ingrediente => ingrediente.nombre);
    return ingredientesSeleccionados.join(', ');
  }

  calcularTotal() {
    let precioTamano = 0;
    if (this.tamanoPizzas === 'chica') {
      precioTamano = 40;
    } else if (this.tamanoPizzas === 'mediana') {
      precioTamano = 80;
    } else if (this.tamanoPizzas === 'grande') {
      precioTamano = 120;
    }

    let totalIngredientes = 0;
    for (const ingrediente of this.ingredientes) {
      if (ingrediente.checked) {
        totalIngredientes += ingrediente.precio;
      }
    }

    this.total = (precioTamano + totalIngredientes) * this.numPizzas;

    const cliente:Clientes = {
      nombre: this.nombre,
      subtotal: this.total
    };
    this.clientes.push(cliente);

    const pedido: Pedido = {
      id: Date.now(),
      tamano: this.tamanoPizzas,
      ingredientes: this.getIngredientesSeleccionados(),
      numPizzas: this.numPizzas,
      subtotal: this.total
    };

    this.pedidos.push(pedido);
  }
  eliminarPedido(pedidoId: number) {
    this.pedidos = this.pedidos.filter(pedido => pedido.id !== pedidoId);
  }
  calcularTotalFinal() {
    let totalFinal = 0;
    for (const pedido of this.pedidos) {
      totalFinal += pedido.subtotal;
    }
    return totalFinal;
  }
  calcularTotalFinal2() {
    let totalFinal = 0;
    for (const cliente of this.clientes) {
      totalFinal += cliente.subtotal;
    }
    return totalFinal;
  }

  nuevaOrden() {
    this.nombre = '';
    this.direccion = '';
    this.telefono = 0;
    this.tamanoPizzas = 'chica';
    for (const ingrediente of this.ingredientes) {
      ingrediente.checked = false;
    }
    this.numPizzas = 0;
    this.pedidos = [];
    this.total = 0;
  }

}
