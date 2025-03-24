import { Routes } from '@angular/router';
import { LoginPageComponent } from './helpers/pages/login-page/login-page.component';
import { SearchPageComponent } from './helpers/pages/search-page/search-page.component';

export const routes: Routes = [
  { path: '', component: SearchPageComponent },
  {
    path: 'login',
    component: LoginPageComponent,
  },
];
