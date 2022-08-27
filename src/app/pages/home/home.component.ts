import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Modal } from 'bootstrap'
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/services/auth.service';
import { IHeader, loginAction } from 'src/app/store/header.state';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  valor: number = 90
  token!: string;
  modal: Modal | undefined
  loginFrm!: FormGroup
  teste: any = [
    {name: "Teste", idade: 12},
    {name: "Teste", idade: 12},

  ]

  test: string = "Opa amigo"
  frmAll!: FormGroup
  constructor(private spinner: NgxSpinnerService, private authService: AuthService, private store: Store<{login: IHeader}>) { }

  ngOnInit(): void {
    this.modal = new window.bootstrap.Modal(document.getElementById('exampleModal') as Element);
    this.frmAll = new FormGroup({
      name: new FormControl(),
      title: new FormControl(),
      value: new FormControl()
    })

    this.loginFrm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),

    })
    //console.log(this.frmAll.controls['name'].value)
  }

  openModal(){
    this.modal?.show()
  }

  closeModal(){
    this.modal?.hide();
  }

  handleSubmit(){
    this.spinner.show()
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
  }

  handleLogin(){
    return this.authService.loginAuth(this.loginFrm.value).subscribe((resp: any) =>{ 
      if(resp.auth){
        sessionStorage.setItem("token", resp.token.token);
        this.token = sessionStorage.getItem("token") as string;
        this.store.dispatch(loginAction())
      }else{
        console.log("Deu ruim!")
      }
    });
  }

  handleUnsign(){
    sessionStorage.removeItem("token")
    window.location.href = "/"
  }

}
