export class MockedRemoteLoggingService {
  rootUrl = '/api';

  public log(message: string, url?: string, stack?: string, isError?: boolean): void {
  }
  
  public logError(error: any): void {
  }
}
