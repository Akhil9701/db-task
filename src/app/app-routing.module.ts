import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { NewUserComponent } from './user/new-user/new-user.component';
import { UserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [
  { path: 'add', component: NewUserComponent },
  { path: '', redirectTo: '/add', pathMatch: 'full' },
  { path: 'user-list', component:UserListComponent },
  { path: 'edit/:id', component: EditUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
