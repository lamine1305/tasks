import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../modules/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
apiUrls="http://localhost:3000/tasks";
chaine=this.apiUrls+"?id='1'";
  //Injection du de la classe HttpClient
  constructor(private http : HttpClient) { }
    

    findAllTasks()
    {
      return this.http.get<Task[]>(this.apiUrls);
    }

    deleteTask(id)
    {
     
      alert (id);
      alert (this.chaine);
      return this.http.delete(this.chaine);

     // return this.http.delete("${this.apiUrl}./${id}");
    }
   }
  
