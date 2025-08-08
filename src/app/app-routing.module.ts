import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = [
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
