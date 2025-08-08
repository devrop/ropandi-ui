import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({ 
    declarations: [], 
    imports: [
        CommonModule,
        FormsModule,
        LoginRoutingModule,
        LoginComponent
    ], 
    providers: [provideHttpClient(withInterceptorsFromDi())] 
})
export class LoginModule { }
