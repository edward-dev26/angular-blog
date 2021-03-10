import {BrowserModule} from '@angular/platform-browser';
import {NgModule, Provider} from '@angular/core';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';

import {AppComponent} from './app.component';
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';
import {HomePageComponent} from './home-page/home-page.component';
import {PostPageComponent} from './post-page/post-page.component';
import {PostComponent} from './shared/components/post/post.component';
import {HeaderComponent} from './shared/components/header/header.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './shared/services/auth.interceptor';
import {PostImageComponent} from './shared/components/post-image/post-image.component';

import { environment } from '../environments/environment';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
};

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    PostPageComponent,
    PostComponent,
    HeaderComponent,
    PostImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [INTERCEPTOR_PROVIDER],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
