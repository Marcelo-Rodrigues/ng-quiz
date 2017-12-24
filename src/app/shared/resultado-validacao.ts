import { Pergunta } from './pergunta';

export class ResultadoValidacao {
  respondidoEm: Date;
  pergunta: Pergunta;
  acertou: boolean;
  opcao: string;
  opcaoCorreta: string;
}
