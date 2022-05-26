import { Component, OnInit } from '@angular/core';
import { CompteI } from 'src/app/utils/modeles/compte-i';
import { AuthService } from 'src/app/utils/services/auth.service';

@Component({
  selector: 'app-cree-compte',
  templateUrl: './cree-compte.component.html',
  styleUrls: ['./cree-compte.component.css']
})
export class CreeCompteComponent implements OnInit {

  compte = {mail:'', pass:''};

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }
  creeCompte(){
    this.auth.creeUser(this.compte);
  }
}
