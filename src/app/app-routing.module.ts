import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'',
  component: WelcomeComponent   
},
{
  path:'login',
  loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
},{
  path:'contents',
  loadChildren: () => import('./template/template.module').then(m => m.TemplateModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
