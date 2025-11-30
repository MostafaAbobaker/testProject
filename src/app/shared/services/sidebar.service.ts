import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  isCollapsed: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  

  toggleSidebar() {
    this.isCollapsed.next(!this.isCollapsed.value);
  }

  closeSidebar() {
    this.isCollapsed.next(false);
  }
}
