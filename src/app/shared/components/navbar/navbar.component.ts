import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  email: string = localStorage.getItem('appTest-email') || '';

  constructor(private sidebarService: SidebarService , private router: Router) { }
  
  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['./auth/login'])
  }
}
