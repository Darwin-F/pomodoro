import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let task = <HTMLInputElement>document.querySelector('#tasks_input');
    
    let submit = document.querySelector('#formulaire');

    function loadTask(task:string){
      let tasks = document.createElement('mat-list-item');
      tasks.textContent = task;
      tasks.className = "";
      document.getElementById('list')?.append(tasks);
    }

    submit?.addEventListener('submit',(e) => {
      e.preventDefault();
      if(task.value == '') {
        task.style.borderColor='red';
      }else {
        loadTask(task.value);
        task.value = '';
      }
    });
    
  }
}
