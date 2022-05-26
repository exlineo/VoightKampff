import { Injectable } from '@angular/core';
import { Database, objectVal, ref, set, list } from '@angular/fire/database';
import { first, map } from 'rxjs/operators';
import { CompteI, SuiviI } from '../modeles/compte-i';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SuiviService {

  suivi:Array<any> = [];


  constructor(private rt:Database, private auth:AuthService) {
    // this.getRTDB();
  }

  /** Surveillance des données en temps réel */
  /** Get realtime data */
  getRTDB() {
    objectVal<any>(ref(this.rt, 'users')).subscribe(
      d => {
        console.log(d['1hq3qved9']);
        for(let s in d){
          this.suivi.push(d[s]);
        }
      }
    );
  }
  getReponses() {
    // const msg = list();
    // msg.valueChanges();
  }
  setRTDB(msg:any){
    msg['uid'] = this.auth.compte.uid;
    set(ref(this.rt, 'users/'+this.auth.compte.uid), msg);
  }
}
