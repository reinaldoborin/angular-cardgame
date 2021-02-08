import { Carta } from "./carta.model";
import { Baralho } from "./baralho.model";
import { Jogador } from "./jogador.model";

export class Mesa {
  jogadorA: Jogador;
  jogadorB: Jogador;
  deck: Carta[];
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
}
