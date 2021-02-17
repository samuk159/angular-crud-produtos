import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Produto } from './produto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  produtos: Produto[] = [];
  produto: Produto = new Produto(null, null);
  indiceEdicao = -1;

  constructor(
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.produtos.push(new Produto("Camiseta", 30.99));
    this.produtos.push(new Produto("Calça Jeans", 100.99));
  }

  salvar() {
    if (!this.produto.nome) {
      console.log('Por favor informe o nome');
      return;
    }

    if (!this.produto.preco) {
      console.log('Por favor informe o preço');
      return;
    }

    this.produto.preco = Number(
      this.produto.preco.toString().replace(',', '.')
    );

    if (this.indiceEdicao > -1) {
      this.produtos[this.indiceEdicao] = this.produto;
    } else {
      this.produtos.unshift(this.produto);
    }
    
    this.produto = new Produto(null, null);
    this.indiceEdicao = -1;
    this.toastr.success('Salvo com sucesso');
  }

  excluir(index) {
    this.produtos.splice(index, 1);
    this.toastr.error('Excluído com sucesso');
  }

  editar(index) {
    this.indiceEdicao = index;
    this.produto = Object.assign(
      new Produto(null, null), 
      this.produtos[index]
    );
  }
}
