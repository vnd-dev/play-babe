import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { TeachBabyApp } from './app.component';
import { LearnNumberPage } from '../pages/learnNumber/learnNumberPage';

@NgModule({
  declarations: [
    TeachBabyApp,
    LearnNumberPage
  ],
  imports: [
    IonicModule.forRoot(TeachBabyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    TeachBabyApp,
    LearnNumberPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
