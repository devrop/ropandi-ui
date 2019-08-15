import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateComponent } from './template.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { ContentsComponent } from './contents/contents.component';
import { CommonModule } from '@angular/common';
const templatRoutes: Routes = [
  {
    path: '',
    canActivate: [],
    component: TemplateComponent,
    children: [
      {
        path: 'privileges',
        loadChildren:'.\/contents\/privilege\/privilege.module#PrivilegeModule'
      },
      {
        path :'privileges\/add',
        loadChildren: '.\/contents\/privilege\/privilege-add.module#PrivilegeAddModule'
      },
      {
        path :'privileges\/view\/:id',
        loadChildren: '.\/contents\/privilege\/privilege-view.module#PrivilegeViewModule'
      },
      {
        path :'privileges\/edit\/:id',
        loadChildren: '.\/contents\/privilege\/privilege-edit.module#PrivilegeEditModule'
      },
      {
        path: 'menus',
        loadChildren:'.\/contents\/menus\/menus.module#MenusModule'
      },
      {
        path: 'menus\/add',
        loadChildren:'.\/contents\/menus\/menu-add.module#MenuAddModule'
      },
      {
        path: 'menus\/edit\/:id',
        loadChildren:'.\/contents\/menus\/menu-edit.module#MenuEditModule'
      },
      {
        path: 'menus\/view\/:id',
        loadChildren:'.\/contents\/menus\/menu-view.module#MenuViewModule'
      },
      {
        path: 'students',
        loadChildren:'.\/contents\/students\/students.module#StudentsModule'
      },
      {
        path: 'students\/add',
        loadChildren:'.\/contents\/students\/student-add.module#StudentAddModule'
      },
      {
        path: 'students\/edit\/:id',
        loadChildren:'.\/contents\/students\/student-edit.module#StudentEditModule'
      },
      {
        path: 'students\/view\/:id',
        loadChildren:'.\/contents\/students\/student-view.module#StudentViewModule'
      },
      {
        path: 'teachers',
        loadChildren:'.\/contents\/teachers\/teachers.module#TeachersModule'
      },
      {
        path: 'teachers\/add',
        loadChildren:'.\/contents\/teachers\/teacher-add.module#TeacherAddModule'
      },
      {
        path: 'teachers\/edit\/:id',
        loadChildren:'.\/contents\/teachers\/teacher-edit.module#TeacherEditModule'
      },
      {
        path: 'teachers\/view\/:id',
        loadChildren:'.\/contents\/teachers\/teacher-view.module#TeacherViewModule'
      },
      {
        path: 'users',
        loadChildren:'.\/contents\/users\/users.module#UsersModule'
      },
      {
        path: 'users\/add',
        loadChildren:'.\/contents\/users\/user-add.module#UserAddModule'
      },
      {
        path: 'users\/edit\/:id',
        loadChildren:'.\/contents\/users\/user-edit.module#UserEditModule'
      },
      {
        path: 'users\/view\/:id',
        loadChildren:'.\/contents\/users\/user-view.module#UserViewModule'
      },
      {
        path: 'roles',
        loadChildren:'.\/contents\/roles\/roles.module#RolesModule'
      },
      {
        path: 'roles\/add',
        loadChildren:'.\/contents\/roles\/role-add.module#RoleAddModule'
      },
      {
        path: 'roles\/view\/:id',
        loadChildren:'.\/contents\/roles\/role-view.module#RoleViewModule'
      },
      {
        path: 'roles\/edit\/:id',
        loadChildren:'.\/contents\/roles\/role-edit.module#RoleEditModule'
      },
      {
        path: 'vehicles',
        loadChildren:'.\/contents\/vehicles\/vehicles.module#VehiclesModule'
      },
      {
        path: 'vehicles\/add',
        loadChildren:'.\/contents\/vehicles\/vehicle-add.module#VehicleAddModule'
      },
      {
        path: 'vehicles\/view\/:id',
        loadChildren:'.\/contents\/vehicles\/vehicle-view.module#VehicleViewModule'
      },
      {
        path: 'vehicles\/edit\/:id',
        loadChildren:'.\/contents\/vehicles\/vehicle-edit.module#VehicleEditModule'
      },

      {
        path: '',
        component: ContentsComponent
      }
    ]
  },
    {
        path: '**',
        redirectTo: '404',
        pathMatch: 'full'
    }
]


@NgModule({
  declarations: [TemplateComponent, HeaderComponent, SidebarComponent,ContentsComponent],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(templatRoutes)
  ],
  exports: [RouterModule]
})
export class TemplateModule { }
