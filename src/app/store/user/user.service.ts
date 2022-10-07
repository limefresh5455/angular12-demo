import { Component, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import * as model from "./user.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
@Injectable()
export class UserService {
  url ="http://localhost:3000";
  constructor(private http: HttpClient) {}
  getUserList(): Observable<model.User[]> {
    return this.http.get(this.url + "/users").pipe(
      map(rep => {
        const response: any = rep || {};
        if (response.status) {
          throw {};
        } else {
          return <model.User[]>rep;
        }
      })
    );
  }

  insert(data: model.User[]): Observable<model.User[]> {
    const headers = new HttpHeaders({'content-type': 'application/json'});
    return this.http.post<model.User[]>(this.url + "/users", data, {headers});
  }

  getUserInfo(id:any): Observable<any> {
    const headers = new HttpHeaders({'content-type': 'application/json'});
    return this.http.get<model.User[]>(this.url + "/users/"+id, {headers});
  }

}