import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
// import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private baseUrl = 'http://localhost:8086/';

  constructor(private http: HttpClient) { }

  login(username:string, password:string) {
    // Make credentials
    const credentials = this.generateBasicAuthCredentials(username, password);
    // Send credentials as Authorization header (this is spring security convention for basic auth)
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Basic ${credentials}`,
        'X-Requested-With': 'XMLHttpRequest'
      })
    };

    // create request to authenticate credentials
    return this.http
      .get(this.baseUrl + 'authenticate', httpOptions)
      .pipe(
        tap((res) => {
          localStorage.setItem('credentials' , credentials);
          return res;
        }),
        catchError((err: any) => {
          console.log(err);
          return throwError('AuthService.login(): Error logging in.');
        })
      );
  }

  // register(user: User) {
  //   // create request to register a new account
  //   return this.http.post(this.baseUrl + 'register', user)
  //   .pipe(
  //     catchError((err: any) => {
  //       console.log(err);
  //       return throwError('AuthService.register(): error registering user.');
  //     })
  //   );
  // }

  logout() {
    localStorage.removeItem('credentials');
  }

  checkLogin() {
    if (localStorage.getItem('credentials')) {
      return true;
    }
    return false;
  }

  generateBasicAuthCredentials(username:string, password:string) {
    return btoa(`${username}:${password}`);
  }

  getCredentials() {
    return localStorage.getItem('credentials');
  }

// When our component completes registration, it can automatically log the user in.

// register.component.ts:

// register(user: User) {
//   this.auth.register(this.newUser).subscribe(
//     data => {
//       console.log('RegisterComponent.register(): user registered.');
//       this.auth.login(this.newUser.username, this.newUser.password).subscribe(
//         next => {
//           console.log('RegisterComponent.register(): user logged in, routing to /todo.');
//           this.router.navigateByUrl('/todo');
//         },
//         error => {
//           console.error('RegisterComponent.register(): error logging in.');
//         }
//       );
//     },
//     err => {
//       console.error('RegisterComponent.register(): error registering.');
//       console.error(err);
//     }
//   );
// }
}


