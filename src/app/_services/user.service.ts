import { Injectable } from '@angular/core';
import { User } from '../_models/user';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { UserGit } from '../_models/userGit';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL: String = environment.apiURL;

  user: User | undefined;

  constructor(private http: HttpClient) { }

  getGitUser(username: String) {
    return this.http.get<UserGit>(this.baseURL + 'users/' + username).pipe(
      map((response: UserGit) =>  {
        return response;
      })
    )
  }

  setUser(user: User | undefined) {
    localStorage.setItem('user', JSON.stringify(user))
    this.user = user;
  }

  getUser() {
    return this.user;
  }

}
