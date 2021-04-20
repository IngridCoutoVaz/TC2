import { createAotUrlResolver } from "@angular/compiler"
import {Produto} from "./Produto"

export const listaProdutosCadastrados : Produto [] = [
    {name: "Barra de cereal", price: 2.95, vegan: true},
    {name: "Chocolate", price: 4.99, vegan: false},
    {name: "Pão", price: 2.99, vegan: true},
    {name: "Barra de cereal", price: 2.95, vegan: true}
]