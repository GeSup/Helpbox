import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  email: string;
  password: string;

  ngOnInit() {
  }
  
  signIn() {
    this.authService.SignIn(this.email, this.password);
    this.email = '';
    this.password = '';
    this.router.navigate(['chat']);
  }

}
