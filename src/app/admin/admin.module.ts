import {NgModule} from '@angular/core';
import {AdminRoutingModule} from './admin-routing.module';
import {AdminLayoutComponent} from './shared/admin-layout/admin-layout.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {CreatePageComponent} from './create-page/create-page.component';
import {EditPageComponent} from './edit-page/edit-page.component';
import {DashboardPageComponent} from './dashboard-page/dashboard-page.component';
import {FormsModule} from '@angular/forms';
import {AuthService} from './shared/services/auth.service';
import {AuthGuard} from './shared/services/auth.guard';
import {SharedModule} from '../shared/shared.module';
import {FormControlComponent} from '../shared/components/form-control/form-control.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
    CreatePageComponent,
    EditPageComponent,
    DashboardPageComponent,
    FormControlComponent
  ],
  imports: [
    AdminRoutingModule,
    FormsModule,
    SharedModule,
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  exports: [AdminRoutingModule]
})
export class AdminModule {
}
