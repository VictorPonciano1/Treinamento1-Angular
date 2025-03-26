import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OcupadoService } from '../_services/ocupado.service';
import { delay, finalize, Observable } from 'rxjs';

/*
export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
*/

@Injectable()
export class loadingInterceptor implements HttpInterceptor {
  constructor(private ocupadoService: OcupadoService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.ocupadoService.ocupado();
    return next.handle(req).pipe(
      delay(1000),
      finalize(() => {
        this.ocupadoService.desocupado();
      })
    )
  }

}
