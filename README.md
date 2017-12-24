# NgQuiz

Quiz com validação de respostas conforme gabarito privado no servidor

## Requisitos para desenvolvimento:
- [Node.js 6+](https://nodejs.org/en/)
- Para plataforma windows, necessário [GitBash](https://git-scm.com/downloads)
- Angular CLI instalado (Dependente do Node.js)

## Para instalação do Angular CLI:
No git bash executar após a instalação do Node.js:

    npm install -g @angular/cli

## Para download e execução do projeto:
No git bash executar:

    git clone git@github.com:Marcelo-Rodrigues/ng-quiz.git
    cd ng-quiz
    npm start

## Configurações
- Os questionários são parametrizados no config: ng-quiz/server/config/perguntas.json
- O gabarito é parametrizado no config: ng-quiz/server/config/gabarito.json

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
