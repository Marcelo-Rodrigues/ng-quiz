import { Input, Component, OnInit } from '@angular/core';
import { Questionario } from '../shared/questionario';
import { QuizService } from '../shared/quiz.service';

@Component({
  selector: 'my-resumo-questionario',
  templateUrl: './resumo-questionario.component.html',
  styleUrls: ['./resumo-questionario.component.css']
})
export class ResumoQuestionarioComponent implements OnInit {

  @Input() questionario: Questionario;
  constructor(private servicoQuiz: QuizService) { }

  ngOnInit() {
  }

  obterUrlImagem() {
    return this.servicoQuiz.obterUrlImagem(this.questionario.imagem);
  }

}
