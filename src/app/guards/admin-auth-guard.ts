import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {TokenStorageService} from '../service/token-storage.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class AdminAuthGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router, private tokenStorage: TokenStorageService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (
      this.tokenStorage.isLoggedIn && this.tokenStorage.getRoles.indexOf('ADMIN') > -1
    ) { return true; }

    else {
      this.router.navigateByUrl('/users/login');
    }
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (
      this.tokenStorage.isLoggedIn && this.tokenStorage.getRoles.indexOf('ADMIN') > -1
    ) { return true; }

    else {
      this.router.navigateByUrl('/users/login');
    }
  }
}
