import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthGuard} from './auth.guard';
import {AuthService} from '../services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class NotAuthorizedGuard implements CanActivate, CanLoad {
    constructor(private authGuard: AuthGuard, private router: Router, private authService: AuthService) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const b = this.authService.isLoggedIn();
        if (b) {
            this.router.navigate(['/nav']);
        }
        return !b;
    }


    canLoad(
        route: Route,
        segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
        const b = this.authService.isLoggedIn();
        if (b) {
            this.router.navigate(['/nav']);
        }
        return !b;
    }
}
