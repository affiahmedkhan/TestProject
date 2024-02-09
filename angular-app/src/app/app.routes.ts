// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';
import { EventComponent } from './event/event.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'data', component: DataComponent },
  { path: 'event', component: EventComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to /home as default
];
