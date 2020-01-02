import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }
  email: string;
  password: string;
  confirmPassword: string;
  dontMatch: string;

  setHide(){
    this.router.navigate(['login']);
  }

  signUp() {
    if (this.password === this.confirmPassword){
    this.authService.SignUp(this.email, this.password);
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
    this.dontMatch = '';
    this.router.navigate(['chat']);
    } else {
      this.dontMatch = 'Passwords Don\'t Match';
    }
  }
  

}
