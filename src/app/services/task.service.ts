import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../modules/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
apiUrls="http://localhost:3000/tasks";

  //Injection du de la classe HttpClient
  constructor(private http : HttpClient) { }
    

    findAllTasks()
    {
      return this.http.get<Task[]>(this.apiUrls);
    }

    deleteTask(id)
    {
      return this.http.delete(this.apiUrls+"/"+id);
    }

    addTask(task : Task)
    {
      return this.http.post<Task>(this.apiUrls,task);
    }

    changeCompleted(id,completed)
    {
      return this.http.patch<Task>(this.apiUrls+"/"+id,{completed : !completed});
    }
   }
  
