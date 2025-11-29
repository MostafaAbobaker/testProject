import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { LoadingService } from '../../shared/services/loading.service';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';

export const generalInterceptor: HttpInterceptorFn = (req, next) => {
  const baseUrl: string = environment.baseURL;
  const token = localStorage.getItem('appTest-token');
  const LoaderService$  = inject(LoadingService);

 LoaderService$.showLoading();

  let modifiedReq: HttpRequest<unknown>
  let headers: Record<string, string> = {};


  if (token) {
    headers['Authorization'] = `Bearer ${localStorage.getItem('appTest-token')}`;
    // Inject baseUrl + headers

    modifiedReq = req.clone({
      url: `${baseUrl}${req.url}`,
      setHeaders: headers
    });
  } else {
    // Inject baseUrl 

    modifiedReq = req.clone({
      url: `${baseUrl}${req.url}`
    });

    
  }






  return next(modifiedReq).pipe(
    finalize(() => LoaderService$.hideLoading()),
  );
};
