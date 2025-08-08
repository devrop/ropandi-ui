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
        loadChildren: () => import('./contents/privilege/privilege.module').then(m => m.PrivilegeModule)
      },
      {
        path :'privileges/add',
        loadChildren: () => import('./contents/privilege/privilege-add.module').then(m => m.PrivilegeAddModule)
      },
      {
        path :'privileges/view/:id',
        loadChildren: () => import('./contents/privilege/privilege-view.module').then(m => m.PrivilegeViewModule)
      },
      {
        path :'privileges/edit/:id',
        loadChildren: () => import('./contents/privilege/privilege-edit.module').then(m => m.PrivilegeEditModule)
      },
      {
        path: 'menus',
        loadChildren: () => import('./contents/menus/menus.module').then(m => m.MenusModule)
      },
      {
        path: 'menus/add',
        loadChildren: () => import('./contents/menus/menu-add.module').then(m => m.MenuAddModule)
      },
      {
        path: 'menus/edit/:id',
        loadChildren: () => import('./contents/menus/menu-edit.module').then(m => m.MenuEditModule)
      },
      {
        path: 'menus/view/:id',
        loadChildren: () => import('./contents/menus/menu-view.module').then(m => m.MenuViewModule)
      },
      {
        path: 'students',
        loadChildren: () => import('./contents/students/students.module').then(m => m.StudentsModule)
      },
      {
        path: 'students/add',
        loadChildren: () => import('./contents/students/student-add.module').then(m => m.StudentAddModule)
      },
      {
        path: 'students/edit/:id',
        loadChildren: () => import('./contents/students/student-edit.module').then(m => m.StudentEditModule)
      },
      {
        path: 'students/view/:id',
        loadChildren: () => import('./contents/students/student-view.module').then(m => m.StudentViewModule)
      },
      {
        path: 'teachers',
        loadChildren: () => import('./contents/teachers/teachers.module').then(m => m.TeachersModule)
      },
      {
        path: 'teachers/add',
        loadChildren: () => import('./contents/teachers/teacher-add.module').then(m => m.TeacherAddModule)
      },
      {
        path: 'teachers/edit/:id',
        loadChildren: () => import('./contents/teachers/teacher-edit.module').then(m => m.TeacherEditModule)
      },
      {
        path: 'teachers/view/:id',
        loadChildren: () => import('./contents/teachers/teacher-view.module').then(m => m.TeacherViewModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./contents/users/users.module').then(m => m.UsersModule)
      },
      {
        path: 'users/add',
        loadChildren: () => import('./contents/users/user-add.module').then(m => m.UserAddModule)
      },
      {
        path: 'users/edit/:id',
        loadChildren: () => import('./contents/users/user-edit.module').then(m => m.UserEditModule)
      },
      {
        path: 'users/view/:id',
        loadChildren: () => import('./contents/users/user-view.module').then(m => m.UserViewModule)
      },
      {
        path: 'roles',
        loadChildren: () => import('./contents/roles/roles.module').then(m => m.RolesModule)
      },
      {
        path: 'roles/add',
        loadChildren: () => import('./contents/roles/role-add.module').then(m => m.RoleAddModule)
      },
      {
        path: 'roles/view/:id',
        loadChildren: () => import('./contents/roles/role-view.module').then(m => m.RoleViewModule)
      },
      {
        path: 'roles/edit/:id',
        loadChildren: () => import('./contents/roles/role-edit.module').then(m => m.RoleEditModule)
      },
      {
        path: 'vehicles',
        loadChildren: () => import('./contents/vehicles/vehicles.module').then(m => m.VehiclesModule)
      },
      {
        path: 'vehicles/add',
        loadChildren: () => import('./contents/vehicles/vehicle-add.module').then(m => m.VehicleAddModule)
      },
      {
        path: 'vehicles/view/:id',
        loadChildren: () => import('./contents/vehicles/vehicle-view.module').then(m => m.VehicleViewModule)
      },
      {
        path: 'vehicles/edit/:id',
        loadChildren: () => import('./contents/vehicles/vehicle-edit.module').then(m => m.VehicleEditModule)
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
