import { Component, OnInit } from '@angular/core';
import { Carta } from 'src/model/carta.model';
import { Baralho } from 'src/model/baralho.model';
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
  baralho = new Baralho();


  ngOnInit(){
    this.mesa.jogadorA = new Jogador("Reinaldo")
    this.mesa.jogadorB = new Jogador("Luana")
    this.baralho.criarBaralho();
    this.mesa.darCartas(this.baralho.baralho);

    console.log(this.mesa)

  }

}


