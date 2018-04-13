import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
 
@Injectable()
export class AuthService {
    public token: string;
 
    constructor(private http: Http) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
 
    login(username: string, password: string): Observable<boolean> {
        console.log('inside auth service ');

        let user = {
            email: username,
            password: password
        };

        return this.http.post('/api/auth/login', user)
            .map((response: Response) => {
                console.log(response.json());
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().data.token;
                let userType = response.json() && response.json().data.user.type;
                let userId = response.json() && response.json().data.user.id;
                let uname = response.json() && response.json().data.user.name;
                let email = response.json() && response.json().data.user.email;
                let mobile = response.json() && response.json().data.user.mobile;
                if (token) {
                    // set token property
                    this.token = token;
 
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                    localStorage.setItem('userName', username);
                    localStorage.setItem('currentUserType', userType);
                    localStorage.setItem('userId',userId);
                    localStorage.setItem('name',uname);
                    localStorage.setItem('email',email);
                    localStorage.setItem('mobile',mobile);
 
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            })
            .catch((err) => {
                
                console.log(err);
                // Do messaging and error handling here
               
                return Observable.throw(err)
            });
    }
 
    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.clear();
        // localStorage.setItem('userId', null);
        // localStorage.setItem('currentUser', null);
        // localStorage.setItem('userName', null);
        // localStorage.removeItem('currentUserType');
    }

    isAuthenticated() {
        return this.token != null;
    }

}