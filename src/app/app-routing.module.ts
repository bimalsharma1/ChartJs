import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component"
import { DragAndDropComponent } from "./drag-and-drop/drag-and-drop.component"
import { DashboardComponent } from "./dashboard/dashboard.component"

const routes: Routes = [
  { path: 'dragdrop', component: DragAndDropComponent },
  { path: 'dashboard', component: DashboardComponent },
  // { path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
