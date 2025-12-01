import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { Router } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  email: string = localStorage.getItem('appTest-email') || '';

  constructor(private sidebarService: SidebarService , private router: Router, private permissionsService: NgxPermissionsService) { }
  
  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }

  logout() {
    localStorage.clear();
    this.permissionsService.flushPermissions();
    this.router.navigate(['./auth/login'])
  }
}
