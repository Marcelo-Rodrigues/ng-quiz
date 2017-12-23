import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';

@Component({
  selector: 'my-lista-questionarios',
  templateUrl: './lista-questionarios.component.html',
  styleUrls: ['./lista-questionarios.component.css']
})
export class ListaQuestionariosComponent implements OnInit {

  questionarios;
  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.quizService.obterQuestionarios()
      .subscribe(questionarios => this.questionarios = questionarios);
  }

}
