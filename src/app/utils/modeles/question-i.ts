export interface QuestionI {
  enonce:string;
  reponses:Array<ReponseI>;
}
export interface ReponseI{
  enonce?:string;
  reponse:string;
  score:number;
}
