import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/authentication.service';


@Component({
    selector: 'silent-callback',
    template: ''
})
export class SilentCallbackComponent implements OnInit {
    constructor(
        private readonly _authService: AuthService,

    ) {}

    ngOnInit() {
        this._authService.silentSignInAuthentication();
    }
}