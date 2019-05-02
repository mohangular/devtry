import { enableProdMode, Injector } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { RemoteLoggingService } from './app/public/services/remote-logging.service';
import { MaybeLoadLocaleProvidersFromQuerymap } from 'src/app/public/services/language-detection.service';

function loadConfig() {
  const http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      startApp(JSON.parse(this.responseText));
    }
  };
  http.open('GET', 'environment-config.json', true);
  http.send();
}

function startApp(config) {
  if (config && config.environment === 'production') {
    enableProdMode();
  }
  const injector = Injector.create([{ deps: [ Injector ], provide: RemoteLoggingService, useClass: RemoteLoggingService }]);
  const logger = injector.get(RemoteLoggingService);

  platformBrowserDynamic([
    { provide: 'appConfig', useValue: config },
  ]).bootstrapModule(AppModule, {
    // Enable ?lang={LOCAL_ID} to override browser config, otherwise autodetect
    providers: MaybeLoadLocaleProvidersFromQuerymap(logger)
  })
    .catch(err => logger.logError(err));
}

loadConfig();
