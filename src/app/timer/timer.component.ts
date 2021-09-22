import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  constructor() { 
   }
  
  ngOnInit(): void {
    let travail = true;
    let compteur = 0;
    let temps = 0;
    let display = <HTMLVideoElement>document.querySelector('#time');
    if(travail) {
      temps = 60;
    }else if (!travail && compteur < 4) {
      temps = 60 * 5;
    }
    else {
      temps = 60 * 15;
    }
    let timerTravail = setInterval ( () => {
      
      let minutes = Math.floor(temps / 60);
      let secondes = temps % 60;
      let valueMinutes = minutes < 10 ? '0' + minutes : minutes;
      let valueSecondes = secondes < 10 ? '0' + secondes : secondes;
      console.log(valueMinutes + ":" + valueSecondes);
      display.textContent = valueMinutes + ":" + valueSecondes;
      if (--temps < 0) {
        clearInterval(timerTravail);
        travail = !travail;
        compteur++;
        timerTravail;
      }
        },1000);
    timerTravail;
  } 
}

