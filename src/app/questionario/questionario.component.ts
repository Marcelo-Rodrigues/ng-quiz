import { Input, Component, OnInit } from '@angular/core';
import { Questionario } from '../shared/questionario';
import { QuizService } from '../shared/quiz.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core';
import { Pergunta } from '../shared/pergunta';

@Component({
  selector: 'my-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.css']
})
export class QuestionarioComponent implements OnInit, OnDestroy {

  private subscricaoRota: Subscription;
  pergunta: Pergunta;
  idQuestionario: string;
  idPergunta: number;
  posicao = 2;
  autoAvancar = true;

  get estado() {
    return this.servicoQuiz.estado;
  }

  constructor(private route: ActivatedRoute, private servicoQuiz: QuizService) { }

  ngOnDestroy(): void {
    this.subscricaoRota.unsubscribe();
  }

  ngOnInit() {
    this.subscricaoRota = this.route.params.subscribe(params => {
      this.exibirQuestionario(params.idQuestionario, +params.idPergunta);
    });
  }

  aoSelecionarOpcao(opcao) {
    this.servicoQuiz.salvarResposta(this.idQuestionario, opcao);
    if (this.autoAvancar) {
      setTimeout(() => this.avancar(), 200);
    }
  }

  avancar() {
    this.servicoQuiz.moverProximaPergunta(this.idQuestionario, this.idPergunta);
  }

  voltar() {
    this.servicoQuiz.moverPerguntaAnterior(this.idQuestionario, this.idPergunta);
  }

  exibirQuestionario(idQuestionario: string, idPergunta: number) {
    this.idQuestionario = idQuestionario;
    this.idPergunta = idPergunta;

    this.servicoQuiz.obterPergunta(idQuestionario, idPergunta)
      .subscribe(pergunta => {
        this.pergunta = pergunta;
      });
  }

  aoConcluirAnimacao() {
    this.servicoQuiz.animacaoConcluida();
  }

  resumo() {
    this.servicoQuiz.moverResumo(this.idQuestionario);
  }
}
