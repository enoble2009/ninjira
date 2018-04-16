import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { routing } from './app.routes';
import { LoginComponent } from './login/login.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { UsersComponent } from './users/users.component';
import { TasksComponent } from './tasks/tasks.component';
import { PlanningComponent } from './planning/planning.component';
import { MenuDirective } from './menu.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UsersComponent,
    TasksComponent,
    PlanningComponent,
    MenuDirective
  ],
  imports: [
    BrowserModule,
    routing,
    Angular2FontawesomeModule
  ],
  exports: [
    RouterModule // se importará desde el módulo padre
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
