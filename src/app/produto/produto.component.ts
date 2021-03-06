import { Component, OnInit } from '@angular/core';
import { Produto } from '../Produto';
import {listaProdutosCadastrados} from "../listaProdutos";
import {listaQuantidade} from "../listaQuantidade";
import { Quantidade } from '../Quantidade';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  listaProdutos : Produto[] = listaProdutosCadastrados;
  listaQuantidade : Quantidade[] = listaQuantidade;
  
  constructor() { }

  ngOnInit(): void {
  }

}
