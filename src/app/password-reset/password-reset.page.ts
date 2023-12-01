import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.page.html',
  styleUrls: ['./password-reset.page.scss'],
})
export class PasswordResetPage implements OnInit {
email:any
  constructor(public route:Router, public authService:AuthService) { }

  ngOnInit() {
  }


  async passwordReset(){
    this.authService.passwordReset(this.email).then(()=>
    this.route.navigate(['/login'])
    ).catch((error)=>
      console.log(error))
    
  }
}
