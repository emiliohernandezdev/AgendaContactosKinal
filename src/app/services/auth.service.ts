import { Injectable } from '@angular/core';
import { UsersService } from './users.service';
import { LoadingController } from '@ionic/angular';
import { load } from '@angular/core/src/render3';
import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public user: UsersService, public loading: LoadingController, public toastController: ToastController) { }

  getSessionStatus() : boolean {
    if(localStorage.getItem('session') === null || localStorage.getItem('session') === "" || localStorage.getItem('session') === undefined){
      return false;
    }else{
      return true;
    }
  }
}
