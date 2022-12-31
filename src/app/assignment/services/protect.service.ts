import {AfterViewInit, Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})

export class ProtectService{
  token!: any;
  constructor() {
    if(localStorage.getItem('token') !== null){
      this.token = localStorage.getItem('token')|| "vide";
      this.token = this.token.split(' ')[1];
    }
  }


}
