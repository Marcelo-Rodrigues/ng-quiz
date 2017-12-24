import { Component, OnInit,EventEmitter } from '@angular/core';
import { Input, Output } from '@angular/core';

@Component({
  selector: 'my-botoes-navegacao',
  templateUrl: './botoes-navegacao.component.html',
  styleUrls: ['./botoes-navegacao.component.css']
})
export class BotoesNavegacaoComponent implements OnInit {

  @Input() exibirAvancar = true;
  @Input() desabilitarVoltar = false;
  @Output() voltarClick = new EventEmitter();
  @Output() avancarClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  aoClicarVoltar() {
    this.voltarClick.emit();
  }

  aoClicarAvancar() {
    this.avancarClick.emit();
  }

}
