import { createAotUrlResolver } from "@angular/compiler"
import {Produto} from "./Produto"

export const listaProdutosCadastrados : Produto [] = [
    {count: 1, name: "Barra de cereal", price: 2.95, vegan: true},
    {count: 2, name: "Chocolate", price: 4.99, vegan: false},
    {count: 3, name: "Pão", price: 2.99, vegan: true},
    {count: 4, name:"Barra de cereal", price: 2.95, vegan: true}
]