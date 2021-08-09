import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoRouteComponent } from './components/todo-route/todo-route.component';
import { TodoIndexRouteComponent } from './components/todo-index-route/todo-index-route.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoRouteComponent,
    TodoIndexRouteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
