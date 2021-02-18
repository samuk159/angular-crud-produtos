import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { CriarContaComponent } from './criar-conta/criar-conta.component';
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
  modalExclusao: BsModalRef;
  indiceExclusao = -1;
  modalCriarConta: BsModalRef;

  constructor(
    private toastr: ToastrService,
    private modalService: BsModalService
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
    this.toastr.success('Excluído com sucesso');
  }

  editar(index) {
    this.indiceEdicao = index;
    this.produto = Object.assign(
      new Produto(null, null), 
      this.produtos[index]
    );
  }

  abrirModalExclusao(template: TemplateRef<any>, index) {
    this.modalExclusao = this.modalService.show(template);
    this.indiceExclusao = index;
  }

  fecharModalExclusao(excluir) {
    this.modalExclusao.hide();

    if (excluir) {
      this.excluir(this.indiceExclusao);
    }

    this.indiceExclusao = -1;
  }

  abrirModalDeCriacaoDeConta() {
    this.modalCriarConta = this.modalService.show(
      CriarContaComponent
    );
  }

}
