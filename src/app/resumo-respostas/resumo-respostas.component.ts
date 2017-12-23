import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Opcao } from '../shared/opcao';

@Component({
  selector: 'my-resumo-respostas',
  templateUrl: './resumo-respostas.component.html',
  styleUrls: ['./resumo-respostas.component.css']
})
export class ResumoRespostasComponent implements OnInit {

  private subscricaoRota: Subscription;
  respostas: Opcao[];
  constructor(private route: ActivatedRoute, private servicoQuiz: QuizService) { }

  ngOnInit() {
    this.subscricaoRota = this.route.params.subscribe(params => this.exibirResumo(params.idQuestionario));
  }

  exibirResumo(idQuestionario: string) {
    this.servicoQuiz.obterPerguntas(idQuestionario)
      .subscribe(perguntas => {
        this.respostas = this.servicoQuiz.respostas[idQuestionario];
      });
  }

}
