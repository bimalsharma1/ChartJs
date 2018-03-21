import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

import { WeatherService } from './weather.service';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { CreatePlanComponent } from './create-plan/create-plan.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import {DndModule, DragDropService, DragDropConfig} from 'ng2-dnd';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DragAndDropComponent,
    CreatePlanComponent,
    PageNotFoundComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DndModule

  ],
  exports: [BrowserModule],//, DndModule
  providers: [WeatherService,DragDropService, DragDropConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
