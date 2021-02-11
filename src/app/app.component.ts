import { Component } from '@angular/core';
import { Produto } from './produto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  produtos: Produto[] = [];

  constructor() {
    this.produtos.push(new Produto("Camiseta", 30.99));
    this.produtos.push(new Produto("Calça Jeans", 100.99));
  }
}
