import { Component, OnInit } from '@angular/core';
import { SuiviService } from 'src/app/utils/services/suivi.service';

@Component({
  selector: 'app-surveillance',
  templateUrl: './surveillance.component.html',
  styleUrls: ['./surveillance.component.css']
})
export class SurveillanceComponent implements OnInit {

  constructor(public s:SuiviService) { }

  ngOnInit(): void {
    this.s.getRTDB();
  }
}
