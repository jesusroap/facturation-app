import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountFormComponent, LoginFormComponent, ResetPasswordFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { DxButtonModule, DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { ProductsComponent } from './pages/products/products.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { SalesComponent } from './pages/sales/sales.component';
import { CustomersComponent } from './pages/customers/customers.component';

const routes: Routes = [
  {
    path: 'pages/customers',
    component: CustomersComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/sales',
    component: SalesComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/add-product',
    component: AddProductComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/add-product/:id',
    component: AddProductComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/products',
    component: ProductsComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'tasks',
    component: TasksComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'create-account',
    component: CreateAccountFormComponent
  },
  {
    path: 'reset-password',
    component: ResetPasswordFormComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DxDataGridModule, DxFormModule, DxButtonModule, DxFormModule],
  exports: [RouterModule],
  providers: [
    AuthGuardService
  ],
  declarations: [
    HomeComponent,
    ProfileComponent,
    TasksComponent,
    ProductsComponent,
    AddProductComponent,
    SalesComponent,
    CustomersComponent
  ]
})
export class AppRoutingModule { }
