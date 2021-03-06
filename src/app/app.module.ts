import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TasksComponent } from './tasks/tasks.component';

//Import des modules http et formulaire//
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, NavbarComponent, TasksComponent],
  imports: [HttpClientModule, BrowserModule, AppRoutingModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
