import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {QuillModule} from 'ngx-quill';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

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
    FontAwesomeModule
  ],
})
export class SharedModule {
}
