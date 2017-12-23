import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionarioComponent } from './questionario/questionario.component';
import { ListaQuestionariosComponent } from './lista-questionarios/lista-questionarios.component';
import { ResumoRespostasComponent } from './resumo-respostas/resumo-respostas.component';

const routes: Routes = [
  {
    path: '',
    component: ListaQuestionariosComponent,
    pathMatch: 'full'
  },
  {
    path: 'questionario/:idQuestionario',
    redirectTo: 'questionario/:idQuestionario/1'
  },
  {
    path: 'questionario/:idQuestionario/resumo',
    component: ResumoRespostasComponent
  },
  {
    path: 'questionario/:idQuestionario/:idPergunta',
    component: QuestionarioComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
