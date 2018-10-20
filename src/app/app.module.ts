import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { LoginRegisterPage } from '../pages/login-register/login-register';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';


import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ImageProvider } from '../providers/image/image';
import { AppUserProvider } from '../providers/app-user/app-user';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,    
    HomePage,
    TabsPage,
    LoginRegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,    
    HomePage,
    TabsPage,
    LoginRegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ImageProvider,
    AppUserProvider
  ]
})
export class AppModule {}
