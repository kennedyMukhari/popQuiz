import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HistoryPage } from '../pages/history/history';
import { SciencePage } from '../pages/science/science';
import { PoliticsPage } from '../pages/politics/politics';
import { BusinessPage } from '../pages/business/business';
import { SoccerPage } from '../pages/soccer/soccer';
import { DisplayPage } from '../pages/display/display';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HistoryPage,
    SciencePage,
    PoliticsPage,
    BusinessPage,
    SoccerPage,
    DisplayPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HistoryPage,
    SciencePage,
    PoliticsPage,
    BusinessPage,
    SoccerPage,
    DisplayPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
