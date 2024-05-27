import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './user.model';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  user = new BehaviorSubject<User>(null);
  private tokenExpirationTimer: any;

  private fbApi = 'https://identitytoolkit.googleapis.com/v1';
  private signUpApi = `${this.fbApi}/accounts:signUp?key=${environment.firebaseApiKey}`;
  private signInApi = `${this.fbApi}/accounts:signInWithPassword?key=${environment.firebaseApiKey}`;

  constructor(private http: HttpClient, private router: Router) {}

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(this.signUpApi, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(
        catchError((errorRes) => {
          return this.handleError(errorRes);
        }),
        tap((resData) => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            resData.expiresIn
          );
        })
      );
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(this.signInApi, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(
        catchError((errorRes) => {
          return this.handleError(errorRes);
        }),
        tap((resData) => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            resData.expiresIn
          );
        })
      );
  }

  autoLogin() {
    const userData = localStorage.getItem('userData');
    if (!userData) {
      return null;
    } else {
      const userInfo: {
        email: string;
        password: string;
        _token: string;
        _tokenExpirationDate: Date;
      } = JSON.parse(userData);

      const loadedUser = new User(
        userInfo.email,
        userInfo.password,
        userInfo._token,
        userInfo._tokenExpirationDate
      );
      if (loadedUser.token) {
        this.user.next(loadedUser);
        const expirationDuration =
          new Date(userInfo._tokenExpirationDate).getTime() -
          new Date().getTime();
        this.autoLogout(expirationDuration);
      }
    }
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  autoLogout(expirationDuration: number) {
    console.log(expirationDuration);
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  private handleAuthentication(
    email: string,
    localId: string,
    idToken: string,
    expiresIn: string
  ) {
    const expiresInNum = +expiresIn * 1000;
    const expirationDate = new Date(new Date().getTime() + expiresInNum);
    const user = new User(email, localId, idToken, expirationDate);
    console.log({ user });
    this.user.next(user);

    this.autoLogout(expiresInNum);

    localStorage.setItem('userData', JSON.stringify(user));
  }

  private handleError(errorRes: HttpErrorResponse) {
    console.log(errorRes);
    let errorMessage = 'An unknown error occurred!';
    if (errorRes?.error?.error?.message) {
      switch (errorRes.error.error.message) {
        case 'EMAIL_EXISTS':
          errorMessage = 'This email already exists.';
          break;
        case 'EMAIL_NOT_FOUND':
          errorMessage = 'This email does not exists.';
          break;
        case 'INVALID_PASSWORD':
          errorMessage = 'This password is not correct.';
          break;
        case 'INVALID_LOGIN_CREDENTIALS':
          errorMessage = 'Entered login credentials are invalid.';
          break;
        default:
          break;
      }
    } else {
      console.log(errorRes);
    }
    return throwError(errorMessage);
  }
}
