import { Input, Component, OnInit } from '@angular/core';
import { Questionario } from '../shared/questionario';

@Component({
  selector: 'my-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.css']
})
export class QuestionarioComponent implements OnInit {

  @Input() questionario: Questionario;
  constructor() { }

  ngOnInit() {
  }

}
