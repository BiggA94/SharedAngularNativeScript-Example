import {Component, OnInit} from '@angular/core';
import {TextField} from 'tns-core-modules/ui/text-field';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {AppBarService} from '../../services/app-bar.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public username: string;
    public password: string;

    constructor(private authService: AuthService, private router: Router, private appBarService: AppBarService) {
    }

    ngOnInit() {
        this.appBarService.hideAppBar();
    }

    public logIn() {
        this.authService.logIn(this.username, this.password);
        this.router.navigate(['/nav']);
    }

    usernameChanged(args) {
        const textField = <TextField>args.object;
        this.username = textField.text;
    }

    passwordChanged(args) {
        const textField = <TextField>args.object;
        this.password = textField.text;
    }

}
