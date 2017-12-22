import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { QuizService } from './shared/quiz.service';

@Component({
  selector: 'my-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  questionarios;

  constructor(private quizService: QuizService) {  }

  ngOnInit() {
    this.quizService.obterQuestionarios()
      .subscribe(questionarios => this.questionarios = questionarios);
  }
}
