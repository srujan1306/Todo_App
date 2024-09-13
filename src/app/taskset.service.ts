import { Injectable } from '@angular/core';
import { Taskset } from './app.component';
import { API } from './API';

@Injectable({
  providedIn: 'root',
})
export class TasksetService {
  constructor() {}
  getUserTasksets() {}
  getTasksets(): Promise<Taskset> {
    return fetch(`${API}/todo/tasksets`).then((res) => res.json());
  }
  getTasksById(task_Id: string) {
    return fetch(`${API}/todo/tasksets/${task_Id}`).then((res) => res.json());
  }
}
