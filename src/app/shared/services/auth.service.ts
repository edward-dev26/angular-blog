import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../interfaces';
import {environment} from '../../../environments/environment';
import {tap} from 'rxjs/operators';

const URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`;

interface AuthResponse {
  idToken: string;
}

@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient
  ) {}

  private get token() {
    return '';
  }

  login(user: User) {
    return this.http.post(URL, user).pipe(tap(this.setToken));
  }

  logout() {}

  isAuthenticated() {
    return !!this.token;
  }

  private setToken(response: AuthResponse) {
    console.log(response);
  }
}
