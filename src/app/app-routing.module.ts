import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'',
  component: WelcomeComponent   
},
{
  path:'login',
  loadChildren: './login/login.module#LoginModule'
},{
  path:'contents',
  loadChildren: './template/template.module#TemplateModule'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
