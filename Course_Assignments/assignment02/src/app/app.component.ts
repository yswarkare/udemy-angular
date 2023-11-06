import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment2';
  username: string = "";
  resetButton = false;

  constructor(){

  }

  getUsername = () =>{
    if(this.username !== ""){
      this.resetButton = true;
    } else if (this.username === ""){
      this.resetButton = false;
    }
  }

  resetUsername = () => {
    this.username = "",
    this.resetButton = false

  }

}
