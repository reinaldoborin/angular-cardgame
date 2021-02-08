import { Component, OnInit } from '@angular/core';
import { Carta } from 'src/model/carta.model';
import { Deck } from 'src/model/deck.model';
import { Jogador } from 'src/model/jogador.model';
import { Mesa } from 'src/model/mesa.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  title = 'CardGame';
  mesa = new Mesa();
  deck = new Deck();


  ngOnInit(){
    this.mesa.jogadorA = new Jogador("Reinaldo")
    this.mesa.jogadorB = new Jogador("Luana")
    this.deck.criarDeck();
    console.log(this.deck)

    console.log(this.mesa)
  }

}


