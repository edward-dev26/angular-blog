import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../interfaces';
import {environment} from '../../../environments/environment';
import {tap} from 'rxjs/operators';

const URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`;

enum LocalStorageKeys {
  Token = 'fb-token',
  TokenExp = 'fb-token-exp'
}

interface AuthResponse {
  idToken: string;
  expiresIn: string;
}

@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient
  ) {}

  private get token() {
    const expDate = new Date(localStorage.getItem(LocalStorageKeys.TokenExp));

    if (new Date() > expDate) {
      this.logout();

      return null;
    }

    return localStorage.getItem(LocalStorageKeys.Token);
  }

  login(user: User) {
    return this.http.post(URL, {
      ...user,
      returnSecureToken: true
    })
      .pipe(tap(this.setToken));
  }

  logout() {
    this.setToken(null);
  }

  isAuthenticated() {
    return !!this.token;
  }

  private setToken(response: AuthResponse | null) {
    if (response) {
      const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000);

      localStorage.setItem(LocalStorageKeys.Token, response.idToken);
      localStorage.setItem(LocalStorageKeys.TokenExp, expDate.toString());
    } else {
      localStorage.removeItem(LocalStorageKeys.Token);
      localStorage.removeItem(LocalStorageKeys.TokenExp);
    }
  }
}
