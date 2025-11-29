import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule,RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
    isCollapsed: boolean = true;

  constructor(private sidebarService: SidebarService) { }
  ngOnInit(): void {
    this.sidebarService.isCollapsed.subscribe((value) => {
      this.isCollapsed = value;
    });
  }
  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }
}
