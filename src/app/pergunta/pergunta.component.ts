import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-pergunta',
  templateUrl: './pergunta.component.html',
  styleUrls: ['./pergunta.component.css']
})
export class PerguntaComponent implements OnInit {

  pergunta = 'Qual é o inverno?';
  opcoes = [
    'Winter',
    'Spring',
    'Summer',
    'Autumn',
  ];
  constructor() { }

  ngOnInit() {
  }

  opcaoSelecionada(opcao) {
    console.log(opcao);
  }

}
