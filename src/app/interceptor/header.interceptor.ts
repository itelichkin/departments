import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ErrorService} from '../services/error.service';
import 'rxjs/add/operator/do';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor(private errorService: ErrorService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req)
      .do((res) => {
        /*if (res instanceof HttpResponse) {
          this.authToken.setToken(res.headers.get('Conform_token'));
        }*/
      }, (error) => {
        this.errorService.errorResponse(error);
      });
  }

}
