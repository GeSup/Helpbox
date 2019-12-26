import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() onHide = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }


  setHide(){
    this.onHide.emit(true);
  }
  

}
