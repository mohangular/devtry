/* tslint:disable */
export interface Error {

    /**
     * time the error occured on the server
     */
    time?: string;
  
    /**
     * default messages
     */
    message?: string;
  
    /**
     * error name used as a key into localization files
     */
    name?: string;
  
    /**
     * parameters for populating the error messages
     */
    properties?: Array<string>;
  }
  