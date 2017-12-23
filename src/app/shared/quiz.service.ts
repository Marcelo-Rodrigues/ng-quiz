import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  import { Observable } from 'rxjs/Rx';
import { Questionario } from './questionario';

const urlBase = 'http://localhost:5000/';

@Injectable()
export class QuizService {

  constructor(private http: HttpClient) { }

  obterQuestionarios(): Observable<Questionario[]> {
    return <Observable<Questionario[]>>this.http
      .get(urlBase + 'perguntas');
  }

  obterUrlImagem(nome: string) {
    return urlBase + nome;
  }

}
