import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showText: boolean = false;
  currentTime: any = new Date().toLocaleString();
  timeStamps = [];

  constructor(){

  }

  toggleText = () => {
    this.showText = !this.showText;
    let time: any = new Date().toLocaleTimeString();
    this.timeStamps.push(time);
  }

  setBGColor = (time: any) => {
    if (this.timeStamps.indexOf(time) > 4){
      return "blue";
    } else {
      return "#111";
    }
  }

  applyClass = (time: any) => {
    return this.timeStamps.indexOf(time) > 4
  }

}
