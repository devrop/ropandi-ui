import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncrDecrService } from './security/encr-decr.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';


@NgModule({ 
    declarations: [],
    bootstrap: [AppComponent], 
    imports: [
        BrowserModule,
        AppRoutingModule,
        AppComponent,
        WelcomeComponent
    ], 
    providers: [EncrDecrService, provideHttpClient(withInterceptorsFromDi())] 
})
export class AppModule { }
