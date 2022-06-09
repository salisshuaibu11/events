import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { IUser } from '../user/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: IUser

  constructor(
    private http: HttpClient
  ) { }

  loginUser(userName: string, password: string) {

    let loginInfo = {
      username: userName,
      password: password
    }
    let options = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

    return this.http.post('/api/login', loginInfo, options)
      .pipe(tap((data: any) => {
        this.currentUser = <IUser>data['user'];
      }))
      .pipe(catchError((err: any) => {
        return of(false);
      }))
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  checkAuthenticationStatus() {
    this.http.get('/api/currentIdentity')
      .pipe(tap((data: any) => {
        if (data instanceof Object) {
          this.currentUser = <IUser>data;
        }
      }))
      .subscribe();
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}
