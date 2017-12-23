import { Pergunta } from './pergunta';

export class Questionario {
  _id: string;
  categoria: string;
  descricao: string;
  imagem: string;
  perguntas: Pergunta[];
}
