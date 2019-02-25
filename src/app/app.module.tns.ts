import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {NativeScriptModule} from 'nativescript-angular/nativescript.module';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';


// Uncomment and add to NgModule imports if you need to use two-way binding
import {NativeScriptFormsModule} from 'nativescript-angular/forms';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { LocationComponent } from './components/location/location.component';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        NavigatorComponent,
        LocationComponent,
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}
