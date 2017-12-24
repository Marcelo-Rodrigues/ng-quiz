import { Component, OnInit, EventEmitter } from '@angular/core';
import { Input, Output } from '@angular/core';
import { Pergunta } from '../shared/pergunta';
import { MatRadioChange } from '@angular/material';
import { Opcao } from '../shared/opcao';
import { BOUNCE_IN_SIDES_ANIMATION } from '../shared/animations/bounce-in-sides.animation';

@Component({
  selector: 'my-pergunta',
  templateUrl: './pergunta.component.html',
  styleUrls: ['./pergunta.component.css'],
  animations: [BOUNCE_IN_SIDES_ANIMATION]
})
export class PerguntaComponent implements OnInit {

  @Input() estado;
  @Input() tabIndex: number;
  @Input() pergunta: Pergunta;
  @Output() opcaoSelecionada = new EventEmitter();
  @Output() animacaoConcluida = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  aoSelecionarOpcao(opcao: MatRadioChange) {
    this.opcaoSelecionada.emit(new Opcao(this.pergunta, opcao.value));
  }

  aoConcluirAnimacao() {
    this.animacaoConcluida.emit();
  }

}
