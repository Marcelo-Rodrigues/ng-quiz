import { Pergunta } from './pergunta';

export class Questionario {
  _id: number;
  categoria: string;
  descricao: string;
  imagem: string;
  perguntas: Pergunta[];
}
