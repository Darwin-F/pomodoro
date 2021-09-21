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
    let tempsTravail = 60;
    let tempsPause = 60 * 5
    let display = <HTMLVideoElement>document.querySelector('#time');
    let startTimer = () => {
      if(travail) {
        let timerTravail = setInterval ( () => {
          let minutes = Math.floor(tempsTravail / 60);
          let secondes = tempsTravail % 60;
          let valueMinutes = minutes < 10 ? '0' + minutes : minutes;
          let valueSecondes = secondes < 10 ? '0' + secondes : secondes;
          display.textContent = valueMinutes + ":" + valueSecondes;
          if (--tempsTravail < 0) {
            clearInterval(timerTravail);
            travail = false;
            startTimer();
          }
        },1000);
      }
      else {
        let timerPause = setInterval ( () => {
          let minutes = Math.floor(tempsPause / 60);
          let secondes = tempsPause % 60;  
          display.textContent = minutes + ":" + secondes;
          if (--tempsPause < 0) {
            clearInterval(timerPause);
            travail = true;
            startTimer();
          }
        },1000);
      }
    }
    startTimer();
  } 
}

