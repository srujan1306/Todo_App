import { ChangeDetectorRef, Component } from '@angular/core';
import { TasksetService } from '../taskset.service';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-task-view',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './task-view.component.html',
  styleUrl: './task-view.component.scss',
})
export class TaskViewComponent {
  tasksets: any;
  tasks: any;
  errorMessage: string | null = null;
  username: any;

  constructor(
    private router: Router,
    private TasksetService: TasksetService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}
  ngOnInit() {
    this.username = localStorage.getItem('user_name');
    this.load_taskSets();
    this.load_Tasks();
  }
  load_taskSets() {
    this.TasksetService.getTasksets()
      .then((data) => {
        this.tasksets = data;
      })
      .catch((error: any) => {
        console.error('Error loading tasks:', error);
        this.errorMessage =
          'An error occurred while loading tasks. Please try again.';
      });
  }
  load_Tasks() {
    let taskset_Id = this.route.snapshot.paramMap.get('tasksetId') as string; // From URL
    this.TasksetService.getTasksById(taskset_Id)
      .then((data) => {
        this.tasks = data.tasklist;
        console.log(this.tasks);
      })
      .then()
      .catch(() => {
        this.errorMessage = 'Something went wrong';
      });
  }
  refreshComponent(task_Id: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/taskset', task_Id]);
    });
  }
}
