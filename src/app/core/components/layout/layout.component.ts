import { Component, OnInit } from '@angular/core';
import { RouterModule } from "@angular/router";
import { SidebarComponent } from "../../../shared/components/sidebar/sidebar.component";
import { NavbarComponent } from "../../../shared/components/navbar/navbar.component";
import { SidebarService } from '../../../shared/services/sidebar.service';
import { LoadingComponent } from "../../../shared/components/loading/loading.component";

@Component({
  selector: 'app-layout',
  imports: [RouterModule, SidebarComponent, NavbarComponent, LoadingComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {
  isCollapsed: boolean = true;
  constructor(private sidebarService: SidebarService) { }
    ngOnInit(): void {
      this.sidebarService.isCollapsed.subscribe((value) => {
        this.isCollapsed = value;
      });
    }
    
}
