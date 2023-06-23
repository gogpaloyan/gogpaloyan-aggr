
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { DataService } from '../service/data.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate{
  constructor(private router: Router, private Data: DataService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.Data.userData == undefined) {
      this.router.navigate(['/profile/login']);
    }
      return this.Data.Data.autification.checkToken()
    

  }



}

