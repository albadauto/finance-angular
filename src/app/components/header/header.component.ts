import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { IAppState, incrementaContador, decrementaContador } from 'src/app/store/app.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private store: Store<{app: IAppState}>) { }
  teste!: string;
  token!: string;
  valor$ = this.store.select('app').pipe(
    map(e => e.counter)
  )
  ngOnInit(): void {
    if (sessionStorage.getItem("token")){
      this.token = sessionStorage.getItem("token") as string;
    }else{
      console.log("SEi la")
    }
  }

  incrementarContador(){
    this.store.dispatch(incrementaContador())
  }
  decrementarContador(){
    this.store.dispatch(decrementaContador())
  }

}
