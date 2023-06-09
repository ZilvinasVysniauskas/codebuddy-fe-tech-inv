import { HttpInterceptorFn } from "@angular/common/http";


export const authInterceptor: HttpInterceptorFn = (req, next) => {

  if (req.url.startsWith('https://chat-app-file-storage')) {
    return next(req);
  }
  const idToken = localStorage.getItem('id_token');

  if (idToken) {
    const cloned = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + idToken)
    });

    return next(cloned)
  } else {
    return next(req)
  }
};