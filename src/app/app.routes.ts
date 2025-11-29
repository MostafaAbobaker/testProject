import { Routes } from '@angular/router';
import { authGuard } from './core/guard/auth.guard';
import { ErrorPageComponent } from './shared/components/error-page/error-page.component';

export const routes: Routes = [
    
    {
        path: '',
        loadComponent: () => import('./core/components/layout/layout.component').then((mod) => mod.LayoutComponent),canActivate: [authGuard] ,children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full',
            },
            {
                path: 'dashboard',
                loadComponent: () => import('./features/components/dashboard/dashboard.component').then((mod) => mod.DashboardComponent),
            },
            {
                path: 'users',
                loadComponent: () => import('./features/components/users/users.component').then((mod) => mod.UsersComponent),
            },
            {
                path:'add-user',
                loadComponent: () => import('./features/components/users/adduser/adduser.component').then((mod) => mod.AdduserComponent),
            },
            {
                path:'edit-user/:id',
                loadComponent: () => import('./features/components/users/adduser/adduser.component').then((mod) => mod.AdduserComponent),
            },
            {
                path:'user-details/:id',
                loadComponent: () => import('./features/components/users/user-details/user-details.component').then((mod) => mod.UserDetailsComponent),
            },
            
        ]
    },
    {
        path: 'auth',
        loadComponent: () => import('./core/components/auth/auth.component').then((mod) => mod.AuthComponent),
        children: [
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full',
            },
            {
                path: 'login',
                loadComponent: () => import('./core/components/auth/login/login.component').then((mod) => mod.LoginComponent),
            }
        ]
    },
    {
                path:'**',
                component: ErrorPageComponent
            }
    
];
