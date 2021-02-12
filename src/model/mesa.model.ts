import { Carta } from "./carta.model";
import { Baralho } from "./baralho.model";
import { Jogador } from "./jogador.model";
import { Jogos } from "./jogos.model";


export class Mesa {
  jogadorA: Jogador;
  jogadorB: Jogador;
  deck: Carta[];
  lixo: Carta[];
  mortoA: Carta[];
  mortoB: Carta[];
  jogosA: Carta[][] = [[]];
  jogosB: Carta[][] = [[]];

  constructor() { }

  darCartas(cartas: Carta[]) {
    this.jogadorA.cartas = cartas.splice(0, 11);
    this.jogadorB.cartas = cartas.splice(0, 11);
    this.mortoA = cartas.splice(0, 11);
    this.mortoB = cartas.splice(0, 11);
    this.deck = cartas;
  }

  comprarCarta(jogador: Jogador) {
    let carta = this.deck[0];
    this.deck.shift();
    jogador.cartas.push(carta)
  }

  descartarCarta(jogador: Jogador, index: number) {
    this.lixo.push(jogador.cartas[index])
    jogador.cartas.splice(index, index + 1)
  }

  descerCarta(jogador: Jogador, indexMesa: number = 0, cartasSelecionadas: Carta[]) {
    console.log(indexMesa)
    console.log(this.jogosA)
    if (indexMesa == null || indexMesa == undefined) {
      for (let x = 0; x < cartasSelecionadas.length; x++) {
        let index = jogador.cartas.findIndex(c => c == cartasSelecionadas[x])
        if (index >= 0) {
          jogador.cartas.splice(index, index + 1)
          this.jogosA[indexMesa || 0].push(cartasSelecionadas[x])
        }

      }
    } else {

    }
    //data.find(a => a.some(o => o.x === x && o.y === y));
  }
}
