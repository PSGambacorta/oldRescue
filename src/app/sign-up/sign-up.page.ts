import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


// import { LoadingController } from '@ionic/angular';
// import { loadavg } from 'os';
// import { AuthenticationService } from 'src/app/authentication.service';
// import { PassThrough } from 'stream';
import { ToastService } from '../services/toast.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit { 
  
  signUpForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(8)]]
  });
  
  constructor(
    private authService: AuthService, 
    private formBuilder: FormBuilder, 
    private router: Router, 
    private toastService: ToastService) { }

  ngOnInit(){}

  /**
   * registra usuario, con email y password provistos.
   * @param event $event
   * @returns promise<void>
   */
  async signUp(event: Event): Promise<void> {
    event.preventDefault();

    if (this.signUpForm.valid) {
      try {
        let email: string = this.signUpForm.value.email as string;
        let password: string = this.signUpForm.value.password as string;
  
        const registeredUser: any = await this.authService.signUp(email, password);
  
        if (registeredUser) {
          const isVerified: boolean = await this.authService.emailVerified();
          this.redirectUser(isVerified);

          if(isVerified){
            await this.toastService.showToast('¡Bienvenido!', 'green', 'checkmark');
          } else {
            await this.toastService.showToast('Verificar email.', 'red', 'warning');
          }
        }
      } catch (error) {
        console.log('Error al registrarse: ', error);
        await this.toastService.showToast('Error al registrarse.', 'red', 'warning');
      }
    } else {
      await this.toastService.showToast('Revise los datos y vuelva a intentar.', 'danger', 'warning');
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
      this.router.navigate(['email-verification']);      
    }
  }
}
