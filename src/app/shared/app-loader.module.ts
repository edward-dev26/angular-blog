import {NgModule} from '@angular/core';
import {NgxUiLoaderConfig, NgxUiLoaderModule} from 'ngx-ui-loader';

const ngxLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: 'red',
  bgsOpacity: 0.5,
  bgsPosition: 'bottom-right',
  bgsSize: 60,
  bgsType: 'ball-spin-clockwise',
  blur: 3,
  delay: 0,
  fastFadeOut: true,
  fgsColor: '#ec6a2a',
  fgsPosition: 'center-center',
  fgsSize: 60,
  fgsType: 'ball-spin-clockwise',
  gap: 24,
  logoPosition: 'center-center',
  logoSize: 120,
  logoUrl: '',
  masterLoaderId: 'master',
  overlayBorderRadius: '0',
  overlayColor: 'rgba(40, 40, 40, 0.8)',
  pbColor: 'red',
  pbDirection: 'ltr',
  pbThickness: 3,
  hasProgressBar: true,
  text: '',
  textColor: '#FFFFFF',
  textPosition: 'center-center',
  maxTime: -1,
  minTime: 300
};

@NgModule({
  imports: [NgxUiLoaderModule.forRoot(ngxLoaderConfig)],
  exports: [NgxUiLoaderModule]
})
export class AppLoaderModule {
}
