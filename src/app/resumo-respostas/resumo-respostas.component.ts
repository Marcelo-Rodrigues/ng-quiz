import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Opcao } from '../shared/opcao';
import { BOUNCE_IN_SIDES_ANIMATION } from '../shared/animations/bounce-in-sides.animation';
import { Pergunta } from '../shared/pergunta';
import { ResultadoValidacao } from '../shared/resultado-validacao';

@Component({
  selector: 'my-resumo-respostas',
  templateUrl: './resumo-respostas.component.html',
  styleUrls: ['./resumo-respostas.component.css'],
  animations: [BOUNCE_IN_SIDES_ANIMATION]
})
export class ResumoRespostasComponent implements OnInit {

  private subscricaoRota: Subscription;
  resultadoValidacao: ResultadoValidacao[];
  respostas: Opcao[];
  idQuestionario: string;
  constructor(private route: ActivatedRoute, private servicoQuiz: QuizService) { }

  get estado() {
    return this.servicoQuiz.estado;
  }

  ngOnInit() {
    this.subscricaoRota = this.route.params.subscribe(params => this.exibirResumo(params.idQuestionario));
  }

  exibirResumo(idQuestionario: string) {
    this.idQuestionario = idQuestionario;
    this.servicoQuiz.obterPerguntas(idQuestionario)
      .subscribe(perguntas => {
        this.respostas = this.servicoQuiz.respostas[idQuestionario];
      });
  }

  voltar() {
    this.servicoQuiz.moverPerguntaAnterior(this.idQuestionario, -1);
  }

  aoConcluirAnimacao() {
    this.servicoQuiz.animacaoConcluida();
  }

  confirmarValidar() {
    this.servicoQuiz
      .confirmarValidar(this.idQuestionario)
      .subscribe(res => this.resultadoValidacao = res);
  }

  navegarPergunta(pergunta: Pergunta) {
    this.servicoQuiz.moverPergunta(this.idQuestionario, pergunta._id);
  }

  obterResultadoValidacao(pergunta: Pergunta) {
    return this.resultadoValidacao ?
      this.resultadoValidacao.find(res => res.pergunta._id === pergunta._id) : null;
  }

}
