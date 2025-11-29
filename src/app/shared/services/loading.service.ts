import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  [x: string]: any;
  
  loadingBehavior = new BehaviorSubject<boolean>(false);
  constructor() { }

  showLoading() {
    this.loadingBehavior.next(true);
  }
  
  hideLoading() {
    this.loadingBehavior.next(false);
  }
}
