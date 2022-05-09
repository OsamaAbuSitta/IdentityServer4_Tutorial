import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/authentication.service';


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private readonly _authService: AuthService,
    ) { }

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        debugger;
        var s = state;
        if (this._authService.isLoggedIn()) {
            return true;
        }

        await this._authService.startAuthentication();
        return false;
    }
}
