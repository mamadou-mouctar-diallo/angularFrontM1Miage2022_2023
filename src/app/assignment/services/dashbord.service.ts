import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoginService} from "./login/login.service";

export interface Product{
  id: String,
  code: String,
  name: String,
  description: String,
  image: String,
  price: Number,
  category: String,
  quantity: Number,
  inventoryStatus: String,
  rating: Number
}

@Injectable({
  providedIn: 'root',
})
export class DashbordService {
  constructor(private http: HttpClient, private loginService: LoginService) {
  }
  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>('assets/demo/data/products.json')
  }
  isThereASession(): boolean{
    return this.loginService.isUserLogged();
  }
}
