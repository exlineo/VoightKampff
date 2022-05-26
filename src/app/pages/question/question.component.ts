import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionI, ReponseI } from 'src/app/utils/modeles/question-i';
import { QuestionsService } from 'src/app/utils/services/questions.service';
import { SuiviService } from 'src/app/utils/services/suivi.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit, OnDestroy {

  n: number = 0;
  question: QuestionI = <QuestionI>{}; // La question en cours
  reponses:Array<ReponseI> = []; // Liste des réponses faites
  reponse:ReponseI = <ReponseI>{};

  constructor(private route: ActivatedRoute, private q: QuestionsService, private s:SuiviService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(p => {
      this.n = p['id'] | 0;
      this.q.getFireQuestions()
        .then(d => {
          d.forEach(
            f => {
              this.q.questions.push(f.data() as QuestionI);
            }
          );
          // Appeler les questions
          this.setQuestion();
        }
      );
    });
  }
  /** La dernière question */
  setQuestion() {
    if (this.n < this.q.questions.length) this.question = this.q.questions[this.n];
  }
  /** Ecriture du formulaire */
  next() {
    console.log(this.reponse);
    this.reponse.enonce = this.question.enonce;
    this.reponses.push(this.reponse);
    // Envoyer les infos à la base de données en temps réel
    this.s.setRTDB({reponses:this.reponses});
    // Changer de question
    this.n++;
    this.setQuestion();
  }
  /** Supprimer les données dans la base en temps réel */
  ngOnDestroy(): void {

  }
}
