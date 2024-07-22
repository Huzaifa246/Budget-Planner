import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SidebarNavComponent } from './sidebar-nav/sidebar-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IncomeComponent } from './income/income.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  { path: 'sidebar-nav', component: SidebarNavComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'income', component:IncomeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetPlannerRoutingModule { }
