import { Carta } from "./carta.model";

export class Jogador {
  nome: string;
  cartas: Carta[];

  constructor(nome: string){
    this.nome = nome;
  }
}

