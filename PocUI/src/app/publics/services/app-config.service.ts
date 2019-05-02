import { Inject, Injectable } from './node_modules/@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  configData: any;

  constructor(@Inject('appConfig') private config) {
    let configStr = JSON.stringify(config, null, 2);
    this.configData = JSON.parse(configStr);
  }

  replaceString(str, search, replacement) {
    return str.replace(new RegExp(search, 'g'), replacement);
  }

  /**
   * Use to get the data found in the second file (config file)
   */
  public getConfig(key: any): {} {
    return this.configData[key];
  }

  /**
   * Use to get the environment name
   */
  public getEnv(): string {
    return this.configData.environment || 'dev';
  }
}
