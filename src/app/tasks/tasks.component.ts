import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../modules/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  //tasks :Task[]=[];
  constructor(private taskSerive:TaskService) { }

  ngOnInit() {
    //this.getTasks()
  }

  getTasks()
  {
  //  alert("salut component");
   // this.taskSerive.findAllTasks().subscribe(tasks=>this.tasks=tasks)
  }

}
