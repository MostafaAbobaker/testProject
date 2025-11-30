import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { RouterModule } from "@angular/router";
import { SidebarComponent } from "../../../shared/components/sidebar/sidebar.component";
import { NavbarComponent } from "../../../shared/components/navbar/navbar.component";
import { SidebarService } from '../../../shared/services/sidebar.service';
import { LoadingComponent } from "../../../shared/components/loading/loading.component";
import { AsyncPipe } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-layout',
  imports: [RouterModule, SidebarComponent, NavbarComponent, LoadingComponent, AsyncPipe],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush 

})
export class LayoutComponent  {
  // isCollapsed: boolean = true;
  private readonly sidebarService = inject(SidebarService);
  isCollapsed$ = this.sidebarService.isCollapsed;
  
    closeSidebar() {
      
      this.sidebarService.closeSidebar();
    }
}
