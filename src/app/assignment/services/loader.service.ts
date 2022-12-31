import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: "platform"
})

export class LoaderService {

  private _loading = new BehaviorSubject<boolean>(false);
  public readonly loading$ = this._loading.asObservable();

  constructor() {
  }

  show(): void {
    this._loading.next(true);
  }
  hide(): void {
    this._loading.next(false);
  }

}
