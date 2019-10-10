import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'index',component:IndexComponent, pathMatch:'full',
     children: [
       { path: 'home', loadChildren:'./home/home/home.module#HomeModule'}
     ]

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
