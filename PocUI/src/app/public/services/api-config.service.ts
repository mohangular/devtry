/* tslint:disable */
import { Injectable } from '@angular/core';
import { AppConfigService } from './app-config.service';

/**
 * Contains global configuration for API services
 */
@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {
  rootUrl: string;

  constructor(private config: AppConfigService) {
    const apiConfig: { [key: string]: string | number } = this.config.getConfig(
      'api'
    );
    this.rootUrl =
      apiConfig.protocol +
      '://' +
      apiConfig.host +
      ':' +
      apiConfig.port +
      apiConfig.base_url;
  }
}
