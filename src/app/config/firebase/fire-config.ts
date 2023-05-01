import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';

export const firebaseApp = initializeApp(environment.firebase);

AngularFireModule.initializeApp(environment.firebase);
