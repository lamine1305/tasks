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

     label :String
     
     newTask : Task={
       label : 'label 000 ',
       completed : false
     }

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
    this.taskSerive.deleteTask(id).
    subscribe(()=>{this.tasks= this.tasks.filter(task => task.id != id)} )
  }

  addTask()
  {
    this.taskSerive.addTask(this.newTask).
    subscribe((task)=>{
                        this.tasks=[task,...this.tasks]
                      } 
                      )
  }

  
  changeCompleted(task)
  {
    this.taskSerive.changeCompleted(task.id,task.completed).
    subscribe((task)=>{
                        task.completed = !task.completed
                      } 
                      )
  }
getTaskByLabel()
  {    alert("this.label")

    this.label="cours1"
    alert(this.label)
    this.taskSerive.findTaskByLabel(this.label)
    .subscribe(()=>{this.tasks= this.tasks.filter(task => task.label==this.label)} );

  }

    
}
