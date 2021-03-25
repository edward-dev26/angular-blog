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
import {PostFormComponent} from './shared/components/post-form/post-form.component';
import {AlertComponent} from './shared/components/alert/alert.component';
import {AlertService} from './shared/services/alert.service';
import {HeaderComponent} from './shared/components/header/header.component';
import {AdminTableComponent} from './shared/components/admin-table/admin-table.component';
import {MatTableModule} from '@angular/material/table';
import {InputComponent} from './shared/components/input/input.component';
import {ButtonComponent} from './shared/components/button/button.component';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {FormWrapperComponent} from './shared/components/form-wrapper/form-wrapper.component';
import {FormCardComponent} from './shared/components/form/form-card/form-card.component';
import {MatSelectModule} from '@angular/material/select';
import { SelectComponent } from './shared/components/fields/select/select.component';

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
    AlertComponent,
    HeaderComponent,
    AdminTableComponent,
    InputComponent,
    ButtonComponent,
    FormWrapperComponent,
    FormCardComponent,
    SelectComponent
  ],
  imports: [
    AdminRoutingModule,
    FormsModule,
    SharedModule,
    MatTableModule,
    MatButtonModule,
    MatMenuModule,
    MatSortModule,
    MatPaginatorModule,
    MatSelectModule
  ],
  providers: [
    AuthGuard,
    AlertService
  ],
  exports: [AdminRoutingModule]
})
export class AdminModule {
}
