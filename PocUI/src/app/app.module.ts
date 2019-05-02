import { LoginService } from './public/services/login.service';
import { GlobalErrorHandlerService } from './public/services/global-error-handler.service';
import { GlobalErrorComponent } from './public/components/global-error/global-error.component';
import { RegisterComponent } from './public/components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './public/components/login/login.component';
import { SrServicesPopupComponent } from './public/components/sr-services-popup/sr-services-popup.component';
import { SrSelectedServicesComponent } from './public/components/sr-selected-services/sr-selected-services.component';
import { SrAvailableServicesComponent } from './public/components/sr-available-services/sr-available-services.component';
import { SrHomeComponent } from './public/components/sr-home/sr-home.component';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatTableModule,
  MatDividerModule,
  MatSnackBarModule,
  MatAutocompleteModule,
  MatSidenavModule,
  MatTabsModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatDialogModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { TestcomponentComponent } from './public/components/testcomponent/testcomponent.component';
import { Comp1TestComponent } from './public/components/comp1-test/comp1-test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestcomponentComponent,
    Comp1TestComponent,
    SrHomeComponent,
    SrAvailableServicesComponent,
    SrSelectedServicesComponent,
    LoginComponent,
    SrServicesPopupComponent,
    RegisterComponent,
    GlobalErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatSidenavModule,
    MatTabsModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    BrowserAnimationsModule,
    LoggerModule.forRoot({
      serverLoggingUrl: '/api/logs',
      level: NgxLoggerLevel.TRACE,
      serverLogLevel: NgxLoggerLevel.ERROR,
      disableConsoleLogging: false
    })
  ],
  providers: [
    LoginService,
    GlobalErrorHandlerService,
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService }
  ],
  entryComponents: [SrServicesPopupComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
