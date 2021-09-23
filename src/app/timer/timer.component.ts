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
    let timerTravail : ReturnType<typeof setInterval>;
    let travail = true;
    let compteur = 0;
    let temps = 60 * 25;
    let display = <HTMLVideoElement>document.querySelector('#time');
    let isPaused = false;
    let buttonPaused = document.querySelector('#pause');
    let buttonReset = document.querySelector('#reset');
    buttonPaused?.addEventListener('click',() => {
      isPaused = !isPaused;
      if(isPaused) {
        if(buttonPaused) buttonPaused.textContent = "Unpause";
      }else {
        if(buttonPaused) buttonPaused.textContent = "Pause";
      }
    });
    buttonReset?.addEventListener('click', () => {
      clearInterval(timerTravail);
      compteur = 0;
      travail = true;
      temps = 60 * 25;
      start(temps);
    });
    function nextStep() {
        travail = !travail;
        compteur++;
        if (compteur == 5) {
          compteur = 0;
        }
        if(travail) {
          temps = 60 * 25;
        }else if (!travail && compteur < 4) {
          temps = 60 * 5;
        }
        else {
          temps = 60 * 15;
        }
        start(temps);
    }
    function start (temps : number) {
        timerTravail = setInterval ( () => {
        if(!isPaused) {
          let minutes = Math.floor(temps / 60);
          let secondes = temps % 60;
          let valueMinutes = minutes < 10 ? '0' + minutes : minutes;
          let valueSecondes = secondes < 10 ? '0' + secondes : secondes;
          display.textContent = valueMinutes + ":" + valueSecondes;
          if (--temps < 0) {
            clearInterval(timerTravail);
            nextStep();
          }
        }
      },1000);
    }
    start(temps);
  } 
}

