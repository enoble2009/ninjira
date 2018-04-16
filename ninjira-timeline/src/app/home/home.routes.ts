// Imports
// Deprecated import
// import { RouterConfig } from '@angular/router';
import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';

import { UsersComponent } from '../users/users.component';
import { TasksComponent } from '../tasks/tasks.component';
import { PlanningComponent } from '../planning/planning.component';

// Route Configuration
export const homeRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'users', component: UsersComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'planning', component: PlanningComponent }
];