import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  isOpenSidebar = new BehaviorSubject<boolean>(false);

  toggleSidebar(value?: boolean) {
    this.isOpenSidebar.next(value ?? !this.isOpenSidebar.value);
  }
}
