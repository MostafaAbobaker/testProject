import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom, APP_INITIALIZER } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http'; // Import the provider


import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { generalInterceptor } from './core/interceptor/general.interceptor';
import { NgxPermissionsModule } from 'ngx-permissions';
import { NgxPermissionsService } from 'ngx-permissions';

export function initPermissionsFactory(permissions: NgxPermissionsService) {
  return () => {
    const role = localStorage.getItem('appTest-role');
    if (role) {
      permissions.loadPermissions([role.toUpperCase()]);
    }
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch(), withInterceptors([generalInterceptor])), // Add the function call to providers array
    provideAnimationsAsync(),
    importProvidersFrom(NgxPermissionsModule.forRoot()),
    { provide: APP_INITIALIZER, useFactory: initPermissionsFactory, deps: [NgxPermissionsService], multi: true },
        providePrimeNG({
            theme: {
                preset: Aura
            }
        })
  ]
};
