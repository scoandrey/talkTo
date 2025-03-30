import { Routes } from '@angular/router';
import { LoginPageComponent } from './helpers/pages/login-page/login-page.component';
import { SearchPageComponent } from './helpers/pages/search-page/search-page.component';
import { ProfilePageComponent } from './helpers/pages/profile-page/profile-page.component';
import { LayoutComponent } from './common-ui/layout/layout.component';
import { canActivateAuth } from './auth/access.guard';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: SearchPageComponent },
      {
        path: 'profile',
        component: ProfilePageComponent,
      },
    ],
    canActivate: [canActivateAuth],
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
];
