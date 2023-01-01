import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CongratsGaurdGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(): any {

    const store = sessionStorage.getItem('store');
    if(store){
      return true
    } else{
      this.router.navigate(['/home'])
    }
  }
  
}
