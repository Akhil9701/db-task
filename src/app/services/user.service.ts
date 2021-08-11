import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  root = environment.apiRoot;
  private BASE_URL = `${this.root}`;
  private headers = {
    headers: new HttpHeaders({ 'content-type': 'application/json' })
  }
  constructor(private http: HttpClient) { }

  public async createUser(user: User): Promise<any> {
    return await this.http.post(this.BASE_URL + '/users', user, this.headers).toPromise();
  }
  public async userList(): Promise<any> {
    return await this.http.get<User[]>(this.BASE_URL + '/users', this.headers).toPromise();
  }
  public async getUserById(id: number): Promise<any> {
    return await this.http.get<User>(this.BASE_URL + `/users/${id}`, this.headers).toPromise();
  }
  public async updateUser(id, params): Promise<any> {
    return await this.http.put(this.BASE_URL + `/users/${id}`, params, this.headers).toPromise();
  }
}
