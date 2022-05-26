import { Injectable } from '@angular/core';
import { CompteI } from '../modeles/compte-i';
import { Firestore, getDoc, doc } from '@angular/fire/firestore';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "@angular/fire/auth";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  compte:CompteI = <CompteI>{}; // Compte de l'utilisateur

  constructor(private auth:Auth, private route:Router, private fire:Firestore) {
    this.setAnonyme();
  }
  /** Création d'un compte par défaut en arrivant pour enregistrer les données */
  setAnonyme(){
    this.compte = {
      uid:this.setNomAleatoire(),
      statut:0
    }
    this.setPosition();
    console.log(this.compte);
  }
  /** On génère un nom anonyme */
  setNomAleatoire(){
    return (Math.random() + 1).toString(36).substring(3);
  }
  /** Récupérer la position pour s'amuser un peu */
  setPosition(){
    navigator.geolocation.getCurrentPosition(pos => {
      this.compte.position = {lat:pos.coords.latitude, long:pos.coords.longitude};
    })
  }
  /** Créer un utilsateur sur Firebase Authentication */
  creeUser(p:{mail:string, pass:string}) {
    createUserWithEmailAndPassword(this.auth, p.mail, p.pass)
      .then((retour) => {
        // Add Firebase UID in user's profil
        console.log(retour, retour.user);
        console.log(retour.user);
        alert('Votre compte a été créé, vous pouvez vous identifier');
        this.route.navigateByUrl('/connexion');
      })
      .catch((error) => {
        if(error.code == 'auth/email-already-in-use'){
          alert("Cet email existe déjà");
        }else{
          alert("Une erreur s'est produite. Merci de rétenter");
        }
        console.log(error.code, error.message);
      });
  }
  /** Add profil data to firestore */
  creeProfil(p:CompteI) {
    // this.setProfil(p);
    // // Add profil to firestore
    // if (this.u.uid) {
    //   this.l.store.setFireDoc('comptes', { uid: this.u.uid, doc:this.profil })
    //     .then(r => {
    //       this.l.store.msgOk(this.l.t['MSG_AC_ADD'], this.l.t['MSG_AC_ADD_DESCR']);
    //       this.route.navigateByUrl('/');
    //     })
    //     .catch(er => {
    //       this.l.store.msgFail(this.l.t['MSG_ER_DATA'], this.l.t['MSG_ER_DATA_DESCR']);
    //       console.log(er);
    //     });
    // }else{

    // }
  }
  /** Set complete profil to create a new one */
  setProfil(p:CompteI){
  }
  /**
   * User connection with email and password in firebase
   * @param mail User's email
   * @param mdp User's password
   */
  idUser(connexion: { mail: string, pass: string }) {
    console.log("Connexion");
    /**
     * Get authentication from user's credentials
     * @param {Auth} auth Authentication object from Firebase admin SDK
     * @param {string} connexion.mail Email from id form
     * @param {string} connexion.pass Password from id form
     */
    signInWithEmailAndPassword(this.auth, connexion.mail, connexion.pass)
      .then((r) => {
        this.compte.uid = r.user.uid;
        this.compte.email = connexion.mail;
        alert("Bienvenue agent");
        this.route.navigateByUrl('/');
      })
      .catch((error) => {
        console.log(error.code, error.message);
      });
  }
  /** User di */
  deconnexion() {
    signOut(this.auth).then(() => {
      this.compte.statut = 0;
      console.log("Déconnexion réussie");
      this.route.navigateByUrl('/');
    }).catch((er) => {
      console.log('Problème dans la déconnexion', er);
    });
  };
  /** Récupérer un compte */
  getFireDoc(){
  const customDoc = doc(this.fire, 'comptes', this.compte.uid!);
    getDoc(customDoc)
      .then(t => t.data())
      .then(t => {
        console.log(t);
      })
      .catch(er => console.log(er));
    }
}
