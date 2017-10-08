
//Utilities
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';
import { StatusBar } from '@ionic-native/status-bar';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';
import { SQLite } from '@ionic-native/sqlite';

//Services
import { ExpenseSqliteService } from '../providers/expense.service.sqlite';
import { CategorySqliteService } from '../providers/category.service.sqlite';
import { BudgetSqliteService } from '../providers/budget.service.sqlite';
import { UtilitiesService } from '../providers/utilities.service';
import { SavingSqliteService } from '../providers/savings.service.sqlite';

//pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Login } from '../pages/login/login';
import { Datefilter } from '../pages/datefilter/datefilter';
import { Dashboard } from '../pages/dashboard/dashboard';

@NgModule({
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  declarations: [
    MyApp,
    HomePage,
    Login,
    Dashboard,
    ProgressBarComponent,
    Datefilter,
  ],
  entryComponents: [
    MyApp,
    HomePage,
    Login,
    Dashboard,
    Datefilter,
  ],
  providers: [
    ExpenseSqliteService,
    CategorySqliteService,
    BudgetSqliteService,
    SavingSqliteService,
    UtilitiesService,
    StatusBar,
    SplashScreen,
    SQLite,
    File,
    Transfer,
    Camera,
    FilePath,
    ImagePicker,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ],
  bootstrap: [IonicApp]
})
export class AppModule { }

/*Expense Tracker repository 
for the correct operation of this project you must use the folllowing dependecies:
1. node v6.10.3
2. python v2.7.10
3. git v.2.13.0.windows.1
*/