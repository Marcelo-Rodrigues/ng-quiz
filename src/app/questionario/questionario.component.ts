import { Input, Component, OnInit } from '@angular/core';
import { Questionario } from '../shared/questionario';
import { QuizService } from '../shared/quiz.service';

@Component({
  selector: 'my-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.css']
})
export class QuestionarioComponent implements OnInit {

  @Input() questionario: Questionario;
  constructor(private servicoQuiz: QuizService) { }

  ngOnInit() {
  }

  obterUrlImagem() {
    return this.servicoQuiz.obterUrlImagem(this.questionario.imagem);
  }

}
