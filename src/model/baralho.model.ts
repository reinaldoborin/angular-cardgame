import { Carta } from "./carta.model";

export class Baralho {
  baralho: Carta[] = [];

  constructor() {

  }

  criarBaralho() {
    let cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "R"];
    let naipes = ["espadas", "ouros", "copas", "paus"];
    let valor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    for(let x = 0; x < cartas.length; x++){
      for(let y = 0; y < naipes.length; y++){
        this.baralho.push(new Carta(cartas[x], naipes[y], valor[x]))
        this.baralho.push(new Carta(cartas[x], naipes[y], valor[x]))
      }
    }

    this.embaralhar(this.baralho)
  }

  embaralhar(baralho){
    this.baralho = baralho
    .map((a) => ({sort: Math.random(), value: a}))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
  }
}
