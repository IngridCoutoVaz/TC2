import { createAotUrlResolver } from "@angular/compiler"
import {Produto} from "./Produto"

export const listaProdutosCadastrados : Produto [] = [
    {name: "Barra de cereal", price: 2.95, vegan: true, amount: 10},
    {name: "Chocolate", price: 4.99, vegan: false, amount: 20},
    {name: "Pão", price: 2.99, vegan: true, amount:15 },
    {name: "Barra de cereal", price: 2.95, vegan: true, amount: 6}
]