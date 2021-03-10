import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {QuillModule} from 'ngx-quill';

@NgModule({
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    QuillModule.forRoot(),
  ],
    exports: [
        HttpClientModule,
        ReactiveFormsModule,
        CommonModule,
        QuillModule,
    ],
})
export class SharedModule {
}
