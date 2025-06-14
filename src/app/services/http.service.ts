import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { Friend, User } from 'src/models/user';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private readonly url: string = './assets/mocks/';

  constructor(public http: HttpClient) {
  }

  public get(path: string) {
    return this.http.get(this.url + path);
  }

  /**
   * 
   * @returns all friends
   */
  public getFriends(): Observable<Friend[]> {
    return this.http.get<Friend[]>(`${this.url}friends.json`);
  }

  /**
   * 
   * @returns my profile
   */
  public getMyProfile(): Observable<User> {
    return this.http.get<User>(`${this.url}my-profile.json`);
  }

  /**
   * 
   * @param username the username of friend
   * @returns one friend by its username
   */
  public getFriend(username: string) {
    return this.getFriends().pipe(
      switchMap((friends) => {
        return of(friends.find(friend => friend.username === username));
      })
    );
  }
}
