import { Injectable } from '@angular/core';
import { Database, objectVal, ref, set, list } from '@angular/fire/database';
import { first } from 'rxjs/operators';
import { CompteI } from '../modeles/compte-i';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SuiviService {

  suivi:any;


  constructor(private rt:Database, private auth:AuthService) {
    // this.getRTDB();
  }

  /** Surveillance des données en temps réel */
  /** Get realtime data */
  getRTDB() {
    objectVal(ref(this.rt, 'users')).pipe(
      // traceUntilFirst('database')
      first()
    ).subscribe(
      d => console.log(d)
    );
  }
  getReponses() {
    // const msg = list();
    // msg.valueChanges();
  }
  setRTDB(msg:any){
    // msg['uid'] = this.auth.compte.uid;
    set(ref(this.rt, 'users/'+this.auth.compte.uid), msg);
  }
}
