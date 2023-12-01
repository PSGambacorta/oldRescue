import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';
// import { AuthService } from './services/auth.service';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";

// import { AngularFireModule } from '@angular/fire/compat';
// import { environment } from 'src/environments/environment';

// @NgModule({
//   declarations: [AppComponent],
//   imports: [BrowserModule, 
//     AuthService,
//     // AngularFireModule.initializeApp(environment.firebaseConfig),
//     IonicModule.forRoot(), 
//     AppRoutingModule, 
//     provideFirebaseApp(() => initializeApp({"projectId":"auth-test-d6d12","appId":"1:789640394212:web:50377a48da8150cc14c3f1","storageBucket":"auth-test-d6d12.appspot.com","apiKey":"AIzaSyCpFE3tRav8ugvWLh7TcQNcV22ouJHx-TI","authDomain":"auth-test-d6d12.firebaseapp.com","messagingSenderId":"789640394212","measurementId":"G-XNC9XCV8GF"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase()), provideStorage(() => getStorage())],
//   providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
//   bootstrap: [AppComponent],

  
// })


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    //AuthService,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), 
    AngularFireAuthModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})

export class AppModule {}
