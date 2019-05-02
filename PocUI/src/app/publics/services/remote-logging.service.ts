import { Injectable, Injector } from './node_modules/@angular/core';
import {
  LocationStrategy,
  HashLocationStrategy
} from './node_modules/@angular/common';
import * as StackTrace from './node_modules/stacktrace-js';
import { HttpHeaders, HttpClient } from './node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RemoteLoggingService {
  rootUrl: string;

  constructor(private injector: Injector, private http: HttpClient) {
    this.rootUrl = '/api/client';
  }

  // private postToServer(message: string, url?: string, stack?: string, isError?: boolean) {
  //   const error =  { message: message, url: url, stack: stack, isError: isError };
  //   const headers = new HttpHeaders({'Content-Type': 'application/json'});
  //   this.http.post(`${this.rootUrl}/v1/error`, error, { headers: headers })
  //     .subscribe(success => {}, err => { console.log(`LOGGER ERROR: ${err}`); });
  // }

  public log(message: string, url?: string, stack?: string, isError?: boolean) {
    // if (false) {
    //   this.postToServer(message, url, stack, isError);
    // }

    if (isError) {
      console.error(
        'Logged to server - message: ' +
          message +
          '  URL: ' +
          url +
          '  stack: ' +
          stack
      );
    } else {
      console.log(
        'Logged to server - message: ' +
          message +
          '  URL: ' +
          url +
          '  stack: ' +
          stack
      );
    }
  }

  public logError(error: any) {
    try {
      const message = error.message ? error.message : error.toString();
      const url = this.getUrl();

      if (error instanceof Error) {
        // get the stack trace, lets grab the last 10 stacks only
        StackTrace.fromError(error).then(stackFrames => {
          // log on the server
          const stackString = stackFrames.map(sf => sf.toString()).join('\n');
          this.log(message, url, stackString, true);
        });
      } else {
        this.log(message, url, 'N/A', true);
      }
    } catch (e) {
      this.log('Error while parsing error: ' + error, '', 'N/A', true);
    }
  }

  private getUrl() {
    const location = this.injector.get(LocationStrategy);
    const url =
      location instanceof HashLocationStrategy
        ? (<HashLocationStrategy>location).path(true) ||
          window.location.toString()
        : window.location.toString();
    return url;
  }
}
