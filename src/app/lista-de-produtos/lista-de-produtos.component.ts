import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produto } from '../produto.model';

@Component({
  selector: 'app-lista-de-produtos',
  templateUrl: './lista-de-produtos.component.html',
  styleUrls: ['./lista-de-produtos.component.scss']
})
export class ListaDeProdutosComponent implements OnInit {

  @Input() produtos: Produto[] = [];
  @Output() editar = new EventEmitter();
  @Output() excluir = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
