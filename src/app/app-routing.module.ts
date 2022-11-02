import { UserResolver } from './service/user.resolver';
import { UserdetailComponent } from './component/userdetail/userdetail.component';
import { UsersComponent } from './component/users/users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  {
    path: 'user/:uuid',
    component: UserdetailComponent,
    resolve: { resolvedResponse: UserResolver },
  },
  { path: '**', redirectTo: 'users' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
