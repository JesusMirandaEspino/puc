import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class UsersService {



  url: string = 'http://localhost:3000/users';
  urlDB: string = 'http://localhost:4000/api/auth/users'

  urlSave: string = 'http://localhost:4000/api/auth/new';



  constructor( private http: HttpClient  ) {
    // code
  }


  getUsers():Observable<Person[]>{
    return this.http.get<Person[]>(this.url);
  }

  getUsersDB():Observable<any>{
    return this.http.get<any>(this.urlDB);
  }

  saveNewUser(params:any){
    console.log(params);
    return this.http.post<Person>(this.urlSave, params)
  }

  updateNewUser(){

  }

}
