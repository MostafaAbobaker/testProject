import { Component } from '@angular/core';
import { LoadingService } from '../../services/loading.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading',
  imports: [CommonModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {
  loading$:any 
  constructor(private loadingService: LoadingService) {
      this.loading$ = this.loadingService.loadingBehavior.asObservable();

  }
}
