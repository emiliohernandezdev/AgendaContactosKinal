import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { AuthService } from 'src/app/services/auth.service';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email:string = "";
  password:string = "";
  constructor(public auth: AuthService, public toastController: ToastController, public loadingController: LoadingController, public user: UsersService,
    public router: Router) { }

  ngOnInit() {
  }

  async DoLogin(){
    if(this.email === "" || this.password === ""){
      const toast = await this.toastController.create({
        message: 'Debes completar todos los campos.',
        duration: 2000,
        color: 'dark',
        showCloseButton: true,
        closeButtonText: 'Cerrar'
      });
      toast.present();
    }else{
      const loading = await this.loadingController.create({
        message: 'Procesando...',
      });
      await loading.present();
      let user = {
        email: this.email,
        password: this.password
      }
      this.user.Login(user).subscribe(async res => {
        await loading.dismiss()
        if(res.message === "Usuario no encontrado."){
          const toast = await this.toastController.create({
            message: 'Usuario no encontrado.',
            duration: 2000,
            color: 'dark',
            showCloseButton: true,
            closeButtonText: 'Cerrar'
          });
          toast.present();
        }else if(res.message === "Las contraseñas no coinciden"){
          const toast = await this.toastController.create({
            message: 'Contraseña incorrecta.',
            duration: 2000,
            color: 'dark',
            showCloseButton: true,
            closeButtonText: 'Cerrar'
          });
          toast.present();
        }else{
          const toast = await this.toastController.create({
            message: 'Sesión iniciada con éxito.',
            duration: 2000,
            color: 'dark',
            showCloseButton: true,
            closeButtonText: 'Cerrar'
          });
          toast.present();
          localStorage.setItem('session', res.token)
          this.router.navigate(['/menu/principal'])
        }
      })
    }
  }

}
