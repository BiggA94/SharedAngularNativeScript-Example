import {Component, OnInit} from '@angular/core';
import {AppBarService} from '../../services/app-bar.service';
import {Router} from '@angular/router';
import {NavRouteId} from './nav-route-id.enum';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'app-navigator',
    templateUrl: './navigator.component.html',
    styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {

    constructor(private appBarService: AppBarService, private router: Router, private authService: AuthService) {
        this.appBarService.hideAppBar();
    }

    ngOnInit() {
    }

    navigate(navId: NavRouteId) {
        switch (navId) {
            case NavRouteId.LocationService:
                this.router.navigate(['/location']);
                break;
            case NavRouteId.AppInfo:
                alert('Dies ist das Angular + Nativescript Beispiel für die Seminararbeit von Alexander Weidt');
                break;
            case NavRouteId.NavigatorPanel:
            default:
                break;
            case NavRouteId.Logout:
                this.authService.logOut();
                this.router.navigate(['']);
                break;
        }
    }

    logOut() {
        this.navigate(NavRouteId.Logout);
    }

    locationService() {
        this.navigate(NavRouteId.LocationService);
    }

    appInfo() {
        this.navigate(NavRouteId.AppInfo);
    }
}
