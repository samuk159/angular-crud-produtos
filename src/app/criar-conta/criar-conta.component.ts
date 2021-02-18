import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../usuario.model';
import { Validacoes } from './validacoes';

@Component({
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.component.html',
  styleUrls: ['./criar-conta.component.scss']
})
export class CriarContaComponent implements OnInit {

  formularioDeUsuario: FormGroup;

  constructor(
    private builder: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.criarFormularioDeUsuario();
  }

  criarFormularioDeUsuario() {
    this.formularioDeUsuario = this.builder.group({
      nome: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100)
      ])],
      email: ['', Validators.email],
      cpf: ['', Validators.compose([
        Validators.required, Validacoes.validaCpf
      ])],
      dataDeNascimento: ['', Validators.compose([
        Validators.required, Validacoes.maiorQue18Anos
      ])],
      senha: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12)
      ])],
      confirmarSenha: ['', Validators.required],
    }, {
      validators: Validacoes.senhasCombinam
    });
  }

  criarConta() {
    let valores = this.formularioDeUsuario.value;

    let usuario = new Usuario();
    usuario.nome = valores.nome;
    usuario.email = valores.email;
    usuario.cpf = valores.cpf;
    usuario.dataDeNascimento = valores.dataDeNascimento;
    usuario.senha = valores.senha;

    this.toastr.success('Usuário cadastrado com sucesso');
    this.formularioDeUsuario.reset();
  }

  get nome() {
    return this.formularioDeUsuario.get('nome');
  }

  get email() {
    return this.formularioDeUsuario.get('email');
  }

  get cpf() {
    return this.formularioDeUsuario.get('cpf');
  }

  get dataDeNascimento() {
    return this.formularioDeUsuario.get('dataDeNascimento');
  }

  get senha() {
    return this.formularioDeUsuario.get('senha');
  }

  get confirmarSenha() {
    return this.formularioDeUsuario.get('confirmarSenha');
  }

}
