import {NgModule} from '@angular/core';
import {AdminRoutingModule} from './admin-routing.module';
import {AdminLayoutComponent} from './shared/components/admin-layout/admin-layout.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {CreatePageComponent} from './create-page/create-page.component';
import {EditPageComponent} from './edit-page/edit-page.component';
import {DashboardPageComponent} from './dashboard-page/dashboard-page.component';
import {FormsModule} from '@angular/forms';
import {AuthGuard} from './shared/services/auth.guard';
import {SharedModule} from '../shared/shared.module';
import {FormControlComponent} from '../shared/components/form-control/form-control.component';
import {SearchPipe} from './shared/pipes/search.pipe';
import { PostFormComponent } from './shared/components/post-form/post-form.component';
import { AlertComponent } from './shared/components/alert/alert.component';
import {AlertService} from './shared/services/alert.service';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
    CreatePageComponent,
    EditPageComponent,
    DashboardPageComponent,
    FormControlComponent,
    SearchPipe,
    PostFormComponent,
    AlertComponent
  ],
  imports: [
    AdminRoutingModule,
    FormsModule,
    SharedModule,
  ],
  providers: [
    AuthGuard,
    AlertService
  ],
  exports: [AdminRoutingModule]
})
export class AdminModule {
}
