import { Injectable, ErrorHandler, Injector } from './node_modules/@angular/core';
import { HttpErrorResponse, HttpClient } from './node_modules/@angular/common/http';
import { Router } from './node_modules/@angular/router';
import { NGXLogger } from './node_modules/ngx-logger';


@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {
    constructor(private injector: Injector, private logger: NGXLogger, private http: HttpClient) {
    this.logger.debug('Debug message');
    this.logger.info('Info message');
    this.logger.log('Default log message');
    this.logger.warn('Warning message');
    this.logger.error('Error message');
     }
     logToEndpoint(logMessage: any): void {
      this.http.post('http://localhost:4000/api/logs', logMessage);
      console.log('am LogToEndPT', logMessage);
   }
    handleError(error: any) {
      const router = this.injector.get(Router);
      console.log('URL: ' + router.url);
      if (error instanceof HttpErrorResponse) {
          // Backend returns unsuccessful response codes such as 404, 500 etc.
            console.error('Backend returned status code: ', error.status);
            console.error('Response body:', error.message);
      } else {
          // A client-side or network error occurred.
            console.error('An error occurred:', error.message);
      }
      router.navigate(['/error']);
    }
}
