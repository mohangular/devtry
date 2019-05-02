import { Injectable } from './node_modules/@angular/core';
import { HttpClient, HttpResponse } from './node_modules/@angular/common/http';
import { BaseService } from './base-service';
import { ApiConfigService } from './api-config.service';
import { Observable } from './node_modules/rxjs';
import { catchError } from './node_modules/rxjs/operators';
import { HttpErrorHandlerService } from './http-error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class BaseClientService extends BaseService  {

  constructor(config: ApiConfigService, http: HttpClient, private errorHandler: HttpErrorHandlerService) {
    super(config, http);
  }

  /**
   * @param route The endpoint for the request (ie. - '/v1/reports_recent')
   * @param action The action that is performing the request
   * @return A response containing the expected model (single)
   */
  getById<TResponseModel>(route: string, action: string = 'error executing requests'): Observable<HttpResponse<TResponseModel>> {
    return this.http.get<TResponseModel>(this.rootUrl + route, { params: this.newParams(), observe: 'response', responseType: 'json' })
    .pipe(catchError(this.errorHandler.handleHttpErrorResponse(action)));
  }

  /**
   * @param route The endpoint for the request (ie. - '/v1/reports_recent')
   * @param action The action that is performing the request
   * @return A response containing the expected models (array)
   */
  get<TResponseModel>(route: string, action: string = 'error executing requests'): Observable<HttpResponse<Array<TResponseModel>>> {
    return this.http.get<TResponseModel>(this.rootUrl + route, { params: this.newParams(), observe: 'response', responseType: 'json' })
    .pipe(catchError(this.errorHandler.handleHttpErrorResponse(action)));
  }

    /**
   * @param route The endpoint for the request (ie. - '/v1/reports_recent')
   * @param body The object that is being updated
   * @param action The action that is performing the request
   * @return A response containing the expected result (single)
   */
  put<TResponseModel>(route: string, body: any, action: string = 'error putting request'): Observable<HttpResponse<TResponseModel>> {
    const url = this.rootUrl + route;
    return this.http.put<TResponseModel>(url, body, { params: this.newParams(), observe: 'response', responseType: 'json' })
        .pipe(catchError(this.errorHandler.handleHttpErrorResponse(action)));
  }

  /**
   * @param route The endpoint for the request (ie. - '/v1/reports_recent')
   * @param body The object that is being posted
   * @param action The action that is performing the request
   * @return A response containing the expected result (single)
   */
  post<TResponseModel>(route: string, body: any, action: string = 'error posting request'): Observable<HttpResponse<TResponseModel>> {
    const url = this.rootUrl + route;
    return this.http.post<TResponseModel>(url, body, { params: this.newParams(), observe: 'response', responseType: 'json' })
      .pipe(catchError(this.errorHandler.handleHttpErrorResponse(action)));
  }

  /**
   * @param route The endpoint for the delete request
   * @param action The action that is performing the request
   * @return A response containing the expected result
   */
  delete<TResponseModel>(route: string, action: string = 'error delete request'): Observable<HttpResponse<TResponseModel>> {
    const url = this.rootUrl + route;
    return this.http.delete<TResponseModel>(url, { params: this.newParams(), observe: 'response', responseType: 'json' })
      .pipe(catchError(this.errorHandler.handleHttpErrorResponse(action)));
  }
}
