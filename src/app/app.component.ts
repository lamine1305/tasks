import { Component } from '@angular/core';
import { ClassA } from './classes/classA';
import { ClassB } from './classes/classB';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tasks';
  constructor(){
    let A : ClassA = new ClassA();
    let B : ClassB = new ClassB();
    B.func(A.getData);
  }
}
