export interface CompteI {
  uid:string;
  nom?:string;
  email?:string;
  position?:{lat:number,long:number};
  statut:number;
}
