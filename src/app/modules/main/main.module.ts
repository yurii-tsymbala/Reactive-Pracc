import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { MainRoutingModule } from './main-routing.module';
import { AddTaskComponent } from './components/tasks/add-task/add-task.component';
import { TaskListComponent } from './components/tasks/task-list/task-list.component';
import { TaskComponent } from './components/tasks/task/task.component';

@NgModule({
  declarations: [
    MainComponent,
    AddTaskComponent,
    TaskListComponent,
    TaskComponent,
  ],
  imports: [CommonModule, MainRoutingModule],
})
export class MainModule {}
