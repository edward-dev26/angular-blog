import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {QuillModule} from 'ngx-quill';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {PostInfoComponent} from './components/post-info/post-info.component';
import {FooterComponent} from './components/footer/footer.component';

@NgModule({
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    QuillModule.forRoot(),
    FontAwesomeModule
  ],
  exports: [
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    QuillModule,
    FontAwesomeModule,
    PostInfoComponent,
    FooterComponent,
  ],
  declarations: [PostInfoComponent, FooterComponent],
})
export class SharedModule {
}
