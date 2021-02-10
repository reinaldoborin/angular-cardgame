import { Carta } from "./carta.model";
import { Baralho } from "./baralho.model";
import { Jogador } from "./jogador.model";

export class Mesa {
  jogadorA: Jogador;
  jogadorB: Jogador;
  deck: Carta[];
  lixo: Carta[];
  mortoA: Carta[];
  mortoB: Carta[];

  constructor(){}

  darCartas(cartas: Carta[]){
    this.jogadorA.cartas = cartas.splice(0, 11);
    this.jogadorB.cartas = cartas.splice(0, 11);
    this.mortoA = cartas.splice(0, 11);
    this.mortoB = cartas.splice(0, 11);
    this.deck = cartas;
  }

  comprarCarta(jogador: Jogador){
    let carta = this.deck[0];
    this.deck.shift();
    jogador.cartas.push(carta)
  }

  descartarCarta(jogador: Jogador, index: number){
    this.lixo.push(jogador.cartas[index])
    jogador.cartas.splice(index, index + 1)
  }
}
