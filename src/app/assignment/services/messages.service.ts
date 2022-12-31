import {Injectable} from "@angular/core";
import {Message, MessageMethode} from "../interfaces/interfaces";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessagesService implements MessageMethode{
  private messageSource = new Subject<Message | Message[]>();
  private clearSource = new Subject<any>();

  // messageObserver = this.messageSource.asObservable();
  // clearObserver = this.clearSource.asObservable();

  add(message: Message): void {
    if(message)this.messageSource.next(message);
  }

  addAll(messages: Message[]): void {
    if(messages && messages.length) this.messageSource.next(messages);
  }

  clear(key?: string): void {
   this.clearSource.next(key || null);
  }

}
