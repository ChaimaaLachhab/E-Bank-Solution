import { HttpInterceptorFn, HttpRequest, HttpHandlerFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../service/auth/auth-service.service';

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {
  const authService = inject(AuthService);
  const authToken = authService.getToken();

  if (authToken) {
    const clonedReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + authToken)
    });
  }
  return next(req);
};
