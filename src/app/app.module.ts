import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { QuestionPage } from '../pages/question/question';

import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
    apiKey: "AIzaSyBLTbLEzOOggRMkdh9GQQFfL72DjFvTPfg",
    authDomain: "buildathon-9bf57.firebaseapp.com",
    databaseURL: "https://buildathon-9bf57.firebaseio.com",
    storageBucket: "buildathon-9bf57.appspot.com",
    messagingSenderId: "5480723222"
};

@NgModule({
  declarations: [MyApp, HomePage, QuestionPage],
  imports: [IonicModule.forRoot(MyApp), AngularFireModule.initializeApp(firebaseConfig)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, QuestionPage],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
