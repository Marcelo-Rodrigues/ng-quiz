import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Questionario } from './questionario';
import { Pergunta } from './pergunta';
import { Opcao } from './opcao';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable()
export class QuizService {

  respostas = {};
  questionario: Questionario[];
  constructor(private http: HttpClient, private router: Router) { }

  obterUrlImagem(nome: string) {
    return environment.apiUrl + nome;
  }

  obterQuestionarios() {
    if (this.questionario) {
      return Observable.of(this.questionario);
    } else {
      return this.http.get<Questionario[]>(environment.apiUrl + 'perguntas')
        .do(questionario => this.questionario = questionario);
    }
  }

  obterPerguntas(idQuestionario: string) {
    return this.obterQuestionarios()
      .map(questionarios => {
        const questionario = questionarios.find((q: Questionario) => q._id === idQuestionario);

        if (!questionario) {
          return null;
        }
        return questionario.perguntas;
      });
  }

  obterPergunta(idQuestionario: string, idPergunta: number) {
    return this.obterPerguntas(idQuestionario)
      .map((perguntas) => perguntas.find(p => p._id === idPergunta));
  }

  moverProximaPergunta(idQuestionario: string, idPerguntaAtual: number) {
    this.obterPerguntas(idQuestionario).subscribe(
      (perguntas) => {
        if (idPerguntaAtual === this.obterUltimaPergunta(perguntas)._id) {
          this.router.navigate(['/questionario', idQuestionario, 'resumo']);
        } else {
          this.router.navigate(['/questionario', idQuestionario, idPerguntaAtual + 1]);
        }
      }
    );
  }

  obterUltimaPergunta(perguntas: Pergunta[]) {
    return perguntas[perguntas.length - 1];
  }

  private atualizarResposta(respostasQuestionario: Opcao[], resposta: Opcao) {
    const referenciaResposta = respostasQuestionario.find(p => p.pergunta === resposta.pergunta);
    referenciaResposta.opcao = resposta.opcao;
  }

  salvarResposta(idQuestionario: string, resposta: Opcao) {
    const respostasQuestionario: Opcao[] = this.respostas[idQuestionario];

    if (respostasQuestionario) {
      this.atualizarResposta(respostasQuestionario, resposta);
    } else {
      this.obterPerguntas(idQuestionario)
        .subscribe(perguntas => {
          this.respostas[idQuestionario] = perguntas.map(p => new Opcao(p, null));
          this.atualizarResposta(this.respostas[idQuestionario], resposta);
        });
    }
  }
}
