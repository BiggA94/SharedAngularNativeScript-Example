import {Injectable} from '@angular/core';
import {AppBarServiceInterface} from './app-bar.service.interface';
import {isAndroid, Page} from 'tns-core-modules/ui/page';

@Injectable({
    providedIn: 'root'
})
export class AppBarService implements AppBarServiceInterface {

    constructor(private page: Page) {
    }

    hideAppBar() {
        if (this.page) {
            this.page.actionBarHidden = true;
        }
        // if (isAndroid) {
        // }
    }
}
