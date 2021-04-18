import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private route: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    /* if (localStorage.getItem('isUserLoggedIn')) {
      return true;
    }
    else {
      this.route.navigateByUrl('login');
      return false;
    } */
    let url=state.url;
    return this.checkLogin(url);

  }


  checkLogin(url: string):any {
    console.log("Url: " + url)
    const val: string = localStorage.getItem('isUserLoggedIn');

    if(val != null && val == "true"){
       if(url == "/login"){
          this.route.parseUrl('/home');
        }
       else {
          return true;}
    } else {
       return this.route.parseUrl('/login');
    }
 }


}
