import { Injectable } from './node_modules/@angular/core';
import { ObservableInput, throwError } from './node_modules/rxjs';
import { RemoteLoggingService } from './remote-logging.service';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorHandlerService {
  constructor(private logger: RemoteLoggingService) {}

  handleHttpErrorResponse(actionName: string) {
    return (
      error: any,
      caught: any
    ): ObservableInput<{}> | ObservableInput<any> => {
      let errorMsg = '';

      if (error.status === 401) {
        errorMsg =
          'While ' +
          actionName +
          ' user was noted as unauthenticated and logged out of the system. ' +
          error.error.message;
        console.warn(
          'While ' +
            actionName +
            ' user was noted as unauthenticated and logged out of the system',
          error.error.message
        );
        this.redirectToLogout();
      } else if (error.error && error.error.message) {
        // A client-side or network error occurred. Handle it accordingly.
        errorMsg =
          'An error occurred while ' + actionName + ': ' + error.error.message;
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        errorMsg = `Backend returned code ${
          error.status
        }, body was: ${JSON.stringify(error.error)}`;
      }
      // return an observable with a user-facing error message
      const httpErr = new Error(errorMsg);
      this.logger.logError(httpErr);
      return throwError(httpErr);
    };
  }

  redirectToLogout() {
    setTimeout(
      () =>
        window.location.assign(
          window.location.origin + '/resp/Public#/logout?code=4'
        ),
      50
    );
  }
}
