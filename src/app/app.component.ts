import { Component } from '@angular/core';
import { AuthService } from './utils/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FireVoightKampff';

  constructor(private auth:AuthService){}
}
