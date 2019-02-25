import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private _isLoggedIn = false;

    constructor() {
    }

    public logIn(username: string, password: string) {
        if (username === 'test' && password === 'pass') {
            this._isLoggedIn = true;
            console.log('logged in!');
        } else {
            alert('The credentials you provided are not correct!');
        }
    }

    public logOut() {
        this._isLoggedIn = false;
        console.log('logged out!');
    }

    public isLoggedIn() {
        return this._isLoggedIn;
    }

}
