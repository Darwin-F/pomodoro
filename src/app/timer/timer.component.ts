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
    let tempsTravail = 60 * 25;
    let tempsPause = 60 * 5
    let display = <HTMLVideoElement>document.querySelector('#time');
    let startTimer = () => {
      if(travail) {
        setInterval ( () => {
          let minutes = Math.floor(tempsTravail / 60);
          let secondes = tempsTravail % 60;
          minutes < 10 ? '0' + minutes : minutes;
          secondes < 10 ? '0' + secondes : secondes;
          display.textContent = minutes + ":" + secondes;
          if (--tempsTravail < 0) {
            travail = false;
          }
        },1000);
      }
      else {
        setInterval ( () => {
          let minutes = tempsPause / 60;
          let secondes = tempsPause % 60;  
          display.textContent = minutes + ":" + secondes;
          if (--tempsPause < 0) {
            travail = true;
          }
        },1000);
      }
    }
    startTimer();
  } 
}

