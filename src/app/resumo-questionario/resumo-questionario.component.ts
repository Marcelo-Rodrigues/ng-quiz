import { Input, Component, OnInit } from '@angular/core';
import { Questionario } from '../shared/questionario';
import { QuizService } from '../shared/quiz.service';
import { BOUNCE_IN_SIDES_ANIMATION } from '../shared/animations/bounce-in-sides.animation';
import { Router } from '@angular/router';

@Component({
  selector: 'my-resumo-questionario',
  templateUrl: './resumo-questionario.component.html',
  styleUrls: ['./resumo-questionario.component.css'],
  animations: [BOUNCE_IN_SIDES_ANIMATION]
})
export class ResumoQuestionarioComponent implements OnInit {

  estado = 'avancando';
  @Input() questionario: Questionario;
  constructor(private servicoQuiz: QuizService, private router: Router) { }

  ngOnInit() {
    setTimeout(() => this.estado = 'carregado');
  }

  obterUrlImagem() {
    return this.servicoQuiz.obterUrlImagem(this.questionario.imagem);
  }

  aoSelecionar() {
    this.servicoQuiz.moverProximaPergunta(this.questionario._id, 0);
  }

  aoConcluirAnimacao() {
    this.servicoQuiz.animacaoConcluida();
  }
}
