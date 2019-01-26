import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }
// Function remplir
    canActivate() {
        if(localStorage.getItem('token') === 'tokenpete'){
            return true;
        } else {
            this.router.navigate(['/signin']);
            return false;
        }
    }
}