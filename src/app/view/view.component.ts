import { Component } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {
  tasks: any[] = [];
  addTask(prop : string){
this.tasks.push({id: this.tasks.length,name : prop})
console.warn(prop)
console.warn(this.tasks)
  }
  rmTask(prop :number){
this.tasks=this.tasks.filter(t => t.id!=prop)
  }
}
