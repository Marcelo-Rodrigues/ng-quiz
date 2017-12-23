import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule, MatCardModule, MatProgressBarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PerguntaComponent } from './pergunta/pergunta.component';
import { QuizService } from './shared/quiz.service';
import { QuestionarioComponent } from './questionario/questionario.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PerguntaComponent,
    QuestionarioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatCardModule,
    MatProgressBarModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
