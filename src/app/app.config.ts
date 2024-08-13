import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"danotes-42db7","appId":"1:247585343448:web:9e7b4f53172873924394ad","storageBucket":"danotes-42db7.appspot.com","apiKey":"AIzaSyDCLLOUkMN-fADHkbz-bVf0sDNn7-p7nLo","authDomain":"danotes-42db7.firebaseapp.com","messagingSenderId":"247585343448"}))), 
    importProvidersFrom(provideFirestore(() => getFirestore()))]
};
