import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {User} from '../../../shared/interfaces';
import {environment} from '../../../../environments/environment';
import {catchError, tap} from 'rxjs/operators';
import {Subject, throwError} from 'rxjs';

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
  public error$ = new Subject();

  constructor(
    private http: HttpClient
  ) {
  }

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
      .pipe(
        tap(this.setToken),
        catchError(this.handleError.bind(this))
      );
  }

  handleError(httpError: HttpErrorResponse) {
    const messages = {
      ['EMAIL_NOT_FOUND']: 'This email doesn\'t exist!',
      ['INVALID_PASSWORD']: 'This password is invalid!',
      ['USER_DISABLED']: 'This user has been disabled!'
    };

    this.error$.next(messages[httpError.error.error.message]);

    return throwError(httpError);
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
