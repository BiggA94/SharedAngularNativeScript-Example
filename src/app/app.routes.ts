import {Routes} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard} from './guards/auth.guard';
import {NavigatorComponent} from './components/navigator/navigator.component';
import {LocationComponent} from './components/location/location.component';
import {NotAuthorizedGuard} from './guards/not-authorized.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [NotAuthorizedGuard],
        canLoad: [NotAuthorizedGuard],
    },
    {
        path: 'nav',
        component: NavigatorComponent,
        canActivate: [AuthGuard],
        canLoad: [AuthGuard],
    },
    {
        path: 'location',
        component: LocationComponent,
        canActivate: [AuthGuard],
        canLoad: [AuthGuard],
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard],
        canLoad: [AuthGuard],
    },
    { path: '**', redirectTo: '/login' }
];
