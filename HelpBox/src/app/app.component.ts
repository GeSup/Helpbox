import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  title = 'HelpBox';
  public changeView: boolean = true;
 
  public toggle():void{ this.changeView = !this.changeView;}

  changeHide(val: boolean) {
    this.changeView = val;
  }
}
