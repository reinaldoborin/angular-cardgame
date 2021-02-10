import { Component, OnInit } from '@angular/core';
import { Carta } from 'src/model/carta.model';
import { Baralho } from 'src/model/baralho.model';
import { Jogador } from 'src/model/jogador.model';
import { Mesa } from 'src/model/mesa.model';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'CardGame';
  mesa = new Mesa();
  baralho = new Baralho();
  selecao: Carta[] = [];


  ngOnInit() {
    this.mesa.jogadorA = new Jogador("Reinaldo")
    this.mesa.jogadorB = new Jogador("Luana")
    this.baralho.criarBaralho();
    this.mesa.darCartas(this.baralho.baralho);

    console.log(this.mesa)

  }

  verso() {
    return false
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  comprarCarta(jogador: Jogador) {
    this.mesa.comprarCarta(jogador)
  }

  descartarCarta(jogador: Jogador, index: number) {
    this.mesa.descartarCarta(jogador, index)
  }

  selecionaCarta(event, carta: Carta) {
    this.selecao.push(carta)
    event.srcElement.classList.add("ativa");
  }

}


