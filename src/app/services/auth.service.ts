import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ILogin } from '../interfaces/Login.interface';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  urlAuth: string = environment.API_URL + "/authenticate";

  constructor(private http: HttpClient) { }

  loginAuth(login: ILogin): Observable<ILogin>{
    return this.http.post<ILogin>(this.urlAuth, login);
  }
}
