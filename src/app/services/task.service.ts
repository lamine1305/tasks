import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../modules/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  //Injection du de la classe HttpClient
  constructor(private http : HttpClient) { }
    

    findAllTasks()
    {
      //alert("salut sevice");
      //return this.http.get<Task[]>("http://localhost:3000/tasks");
    }

   }
  
