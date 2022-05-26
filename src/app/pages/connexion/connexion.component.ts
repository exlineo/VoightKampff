import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/utils/services/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  compte = {mail:'', pass:''};

  constructor(private auth:AuthService) { }

  ngOnInit(): void {}

  connexion(){
    this.auth.idUser(this.compte);
  }
}
