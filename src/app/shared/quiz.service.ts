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
  estado: string;
  respostas = {};
  questionarios: Questionario[];
  constructor(private http: HttpClient, private router: Router) {
  }

  animacaoConcluida() {
    this.estado = 'carregado';
  }

  obterUrlImagem(nome: string) {
    if (nome) {
      return environment.apiUrl + nome;
    } else {
      return environment.apiUrl + 'questionario.png';
    }
  }

  obterQuestionarios() {
    if (this.questionarios) {
      return Observable.of(this.questionarios);
    } else {
      return this.http.get<Questionario[]>(environment.apiUrl + 'perguntas')
        .do(questionarios => this.inicializarRespostas(questionarios));
    }
  }

  inicializarRespostas(questionarios: Questionario[]) {
    this.questionarios = questionarios;
    this.respostas = {};
    console.log(questionarios);
    questionarios.forEach(questionario => {

      const questionarioEmBranco = questionario.perguntas.map(p => new Opcao(p, null));

      // manter respostas ja preenchidas
      this.respostas[questionario._id] = Object.assign(questionarioEmBranco, this.respostas[questionario._id]);

    });
    console.log(this.respostas);
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
    this.estado = 'avancando';
    this.obterPerguntas(idQuestionario).subscribe(
      (perguntas) => {
        if (idPerguntaAtual === this.obterUltimaPergunta(perguntas)._id) {
          this.direcionarQuestionario(idQuestionario, 'resumo');
        } else {
          this.direcionarQuestionario(idQuestionario, idPerguntaAtual + 1);
        }
      }
    );
  }

  moverPerguntaAnterior(idQuestionario: string, idPerguntaAtual: number) {
    if (idPerguntaAtual > 1) {
      this.estado = 'recuando';
      this.direcionarQuestionario(idQuestionario, idPerguntaAtual - 1);
    } else if (idPerguntaAtual === -1) {
      this.estado = 'recuando';
      this.obterPerguntas(idQuestionario)
        .map(perguntas => this.obterUltimaPergunta(perguntas)._id)
        .subscribe(id => this.direcionarQuestionario(idQuestionario, id));
    }
  }

  direcionarQuestionario(idQuestionario: string, idPergunta: string | number) {
    this.router.navigate(['/questionario', idQuestionario, idPergunta]);
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
    }
  }
}
