import { Injectable } from '@angular/core';
import { Firestore, getDocs, getDoc, collection, doc } from '@angular/fire/firestore';
import { QuestionI } from '../modeles/question-i';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  questions: Array<QuestionI> = []; // Liste des questions
  questions$: BehaviorSubject<Array<QuestionI>> = new BehaviorSubject(<Array<QuestionI>>[]);

  constructor(private fire: Firestore) { }

  /**
   * Récupérer toutes les questions dans la base de données
   */
  async getFireQuestions() {
      return await getDocs(collection(this.fire, 'questions'));
  }
  /** Récupérer les questions si elles sont dans un champ de texte */
  getListeQuestions() {
    const customDoc = doc(this.fire, 'listeQuestions', 'questions');
    getDoc(customDoc)
      .then(t => t.data())
      .then(t => {
        console.log(t);
      })
      .catch(er => console.log(er));
  }
}
