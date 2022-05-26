import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/utils/services/questions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    console.log('coucou');
  }
}
