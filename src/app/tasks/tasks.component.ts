import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor() { }
  
  public taskList : string[] = [];
  
  ngOnInit(): void {
    let task = <HTMLInputElement>document.querySelector('#tasks_input');
    
    let submit = document.querySelector('#formulaire');

    submit?.addEventListener('submit',(e) => {
      e.preventDefault();
      if(task.value == '') {
        task.style.borderColor='red';
      }else {
        this.taskList.push(task.value);
        task.value = '';
      }
    });
    
  }
}
