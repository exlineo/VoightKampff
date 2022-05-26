import { ReponseI } from "./question-i";

export interface CompteI {
  uid:string;
  nom?:string;
  email?:string;
  position?:{lat:number,long:number};
  statut:number;
}
export interface SuiviI{
  uid:string;
  reponses:Array<ReponseI>;
}
