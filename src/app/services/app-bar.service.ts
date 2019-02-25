import {Injectable} from '@angular/core';
import {AppBarServiceInterface} from './app-bar.service.interface';

@Injectable({
    providedIn: 'root'
})
export class AppBarService implements AppBarServiceInterface {

    constructor() {
    }

    hideAppBar() {
        // noop
    }
}
