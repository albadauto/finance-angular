import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { IHeader, loginAction, unsignAction } from 'src/app/store/header.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private store: Store<{login: IHeader}>) { }
  teste!: string;
  token!: string;
  login$ = this.store.select('login').pipe(
    map(e => e.login)
  )
  ngOnInit(): void {
    if (sessionStorage.getItem('token') !== null){
      this.store.dispatch(loginAction());
    }else{
      this.store.dispatch(unsignAction());
    }
  }


  

 

}
