import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() onHide = new EventEmitter<boolean>();

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }
  email: string;
  password: string;
  confirmPassword: string;
  dontMatch: string;

  setHide(){
    this.onHide.emit(true);
  }

  signUp() {
    if (this.password === this.confirmPassword){
    this.authService.SignUp(this.email, this.password);
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
    this.dontMatch = '';
    } else {
      this.dontMatch = 'Passwords Don\'t Match';
    }
  }
  

}
