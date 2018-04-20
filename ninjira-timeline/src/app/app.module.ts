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
import { MenuComponent } from './menu/menu.component';
import { MatTableModule, MatDialogModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { UserCreationComponent } from './user-creation/user-creation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UsersComponent,
    TasksComponent,
    PlanningComponent,
    MenuComponent,
    UserCreationComponent
  ],
  entryComponents: [
    UserCreationComponent
  ],
  imports: [
    BrowserModule,
    routing,
    Angular2FontawesomeModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  exports: [
    RouterModule // se importará desde el módulo padre
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
