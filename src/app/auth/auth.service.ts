import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { take, tap } from 'rxjs';
import { TokenResponse } from './auth.interface';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);
  coockieService = inject(CookieService);
  baseApiUrl = 'https://icherniakov.ru/yt-course/auth/';

  token!: string | null;
  refreshToken!: string | null;

  get isAuth() {
    if (!this.token) {
      this.token = this.coockieService.get('token');
    }
    return !!this.token;
  }
  login(payload: { username: string; password: string }) {
    const fd: FormData = new FormData();
    fd.append('username', payload.username);
    fd.append('password', payload.password);
    return this.http.post<TokenResponse>(`${this.baseApiUrl}token`, fd).pipe(
      tap((val) => {
        this.token = val.access_token;
        this.refreshToken = val.refresh_token;
        this.coockieService.set('token', this.token);
        this.coockieService.set('refreshToken', this.refreshToken);
      })
    );
  }
}
