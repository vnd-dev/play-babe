import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { TeachBabyApp } from './app.component';
import { Storage } from '@ionic/storage';
import { LearnNumberPage } from '../pages/learnNumber/learnNumberPage';
import { ParentCenterPage } from '../pages/parentCenter/parentCenterPage';

@NgModule({
  declarations: [
    TeachBabyApp,
    LearnNumberPage,
    ParentCenterPage
  ],
  imports: [
    IonicModule.forRoot(TeachBabyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    TeachBabyApp,
    LearnNumberPage,
    ParentCenterPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Storage]
})
export class AppModule {}
