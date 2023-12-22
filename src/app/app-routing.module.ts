import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './modules/admin/components/sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'admin',
    loadChildren: () =>
    import('./modules/admin/admin.module').then(m=> m.AdminModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    enableTracing:true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
