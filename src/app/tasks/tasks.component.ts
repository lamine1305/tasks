import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../modules/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

     tasks :Task[]=[];
  constructor(private taskSerive:TaskService) { }

  ngOnInit() {
    this.getTasks()
  }

  getTasks()
  {
    this.taskSerive.findAllTasks().subscribe(tasks=>this.tasks=tasks);
  }

  deleteTask(id)
  {
    alert(id);
    this.taskSerive.deleteTask(id).subscribe(()=>{this.tasks= this.tasks.filter(task => task.id != id)} )
  }
    
}
