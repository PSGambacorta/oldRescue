import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // loginForm : FormGroup

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  constructor(
    // private toastController: ToastController, 
    // private alertController: AlertController,    
    private authService: AuthService,
    private router: Router,
    private loadingController: LoadingController,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    private toastService: ToastService
  ) { }

  ngOnInit() { }

  /**
     * inicia sesion con email y password ingresados.
     * @param event Primer parametro Event
     * @returns Promise<void>
     */
  async emailLogin(event: Event): Promise<void> {
    event.preventDefault();

    if (this.loginForm.valid) {
      try {
        let email = this.loginForm.value.email as string;
        let password = this.loginForm.value.password as string;

        const loggedUser = await this.authService.loginEmailPassword(email, password);

        if (loggedUser) {
          const isVerified: boolean = await this.authService.emailVerified();
          this.redirectUser(isVerified);
          await this.toastService.showToast(
            'Bienvenid@',
            'success',
            'checkmark',
            );
        }
        else {
          await this.toastService.showToast(
            'Datos incorrectos',
            'danger',
            'warning');
        }
      }
      catch (error) {
        console.log('Error al iniciar sesión: ', error);
        await this.toastService.showToast(
          'Error al iniciar sesion, intente nuevamente.',
          'danger',
          'warning');
      }
    }
    else {
      await this.toastService.showToast(
        'Informacion incorrecta, revise los datos y vuelva a intentar.',
        'danger',
        'warning');
    }
  }

  /**
   * intenta iniciar sesion con gmail
   * @returns promise<void>
   */
  async googleLogin(): Promise<void> {
    try {
      const loggedUser: any = await this.authService.googleLogin();

      if (loggedUser) {
        const isVerified = await this.authService.emailVerified();
        this.redirectUser(isVerified);
        await this.toastService.showToast(
          'Bienvenid@',
          'green',
          'checkmark')
      }
      else {
        await this.toastService.showToast(
          'Error al iniciar sesion, intente nuevamente.',
          'red',
          'warning');
      }
    } catch (error) {
      console.log('Error al iniciar sesión: ', error);
      await this.toastService.showToast(
        'Informacion incorrecta, revise los datos y vuelva a intentar.',
        'red',
        'warning');
    }
  }

  /**
     * redirecciona al usuario, segun el estado de verificacion, 
     * if true logea sino vuelve a verificacion.
     * @param isVerified bool
     * @returns void
     */
  private redirectUser(isVerified: boolean): void {
    if (isVerified) {
      this.router.navigate(['home']);
    } else {
      this.router.navigate(['email-verification']);   // checkear la pagina para verificar email
    }
  }


  // async presentToast(message: undefined){
  //   console.log(message);

  //   const toast = await this.toastController.create({
  //     message: message,
  //     duration: 1500,
  //     position: 'top'
  //   });

  //   await toast.present();

}

