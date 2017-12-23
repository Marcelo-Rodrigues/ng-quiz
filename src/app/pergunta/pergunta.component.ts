import { Component, OnInit, EventEmitter } from '@angular/core';
import { Input, Output } from '@angular/core';
import { Pergunta } from '../shared/pergunta';
import { MatRadioChange } from '@angular/material';
import { Opcao } from '../shared/opcao';

@Component({
  selector: 'my-pergunta',
  templateUrl: './pergunta.component.html',
  styleUrls: ['./pergunta.component.css']
})
export class PerguntaComponent implements OnInit {

  @Input() pergunta: Pergunta;
  @Output() opcaoSelecionada = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  aoSelecionarOpcao(opcao: MatRadioChange) {
    this.opcaoSelecionada.emit(new Opcao(this.pergunta, opcao.value));
  }

}
