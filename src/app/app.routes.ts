import { Routes } from '@angular/router';
import { TaskViewComponent } from './task-view/task-view.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CreateTaskComponent } from './create-task/create-task.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'tasksets',
    component: TaskViewComponent,
  },
  {
    path: 'newtask',
    component: CreateTaskComponent,
  },
  {
    path: 'taskset/:tasksetId',
    component: TaskViewComponent,
  },
];
