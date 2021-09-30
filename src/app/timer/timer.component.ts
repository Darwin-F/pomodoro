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
    let image1 = <HTMLImageElement>document.getElementById('image1');
    let image2 = <HTMLImageElement>document.getElementById('image2');
    let image3 = <HTMLImageElement>document.getElementById('image3');
    let image4 = <HTMLImageElement>document.getElementById('image4');
    let timerTravail : ReturnType<typeof setInterval>;
    let travail = true;
    let compteur = 1;
    let temps = 25 * 60;
    let display = <HTMLVideoElement>document.querySelector('#time');
    let isPaused = false;
    let buttonPaused = document.querySelector('#pause');
    let buttonReset = document.querySelector('#reset');
    let title = <HTMLElement>document.querySelector('#title');
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
      reset();
      start(temps);
    });
    function reset() {
      compteur = 1;
      travail = true;
      temps = 25 * 60;
      title.textContent = "WORK !!";
      image1.src = "assets/tomates.png";
      image2.src = "assets/tomates.png";
      image3.src = "assets/tomates.png";
      image4.src = "assets/tomates.png";
    }
    function nextStep() {
        travail = !travail;
        if(travail) compteur++;   
        let image = <HTMLImageElement>document.getElementById('image'+compteur);
        if (image && travail == false) image.src = "assets/tomates_v.png";
        if (compteur == 5) {
          compteur = 0;
          reset();
        }
        if(travail) {
          temps = 25 * 60;
          title.textContent = "WORK !!"
        }else if (!travail && compteur < 4) {
          temps = 5 * 60;
          title.textContent = "REST !!"
        }
        else {
          temps = 20 * 60;
          title.textContent = "REST !!"
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

