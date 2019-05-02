import { inject, TestBed } from './node_modules/@angular/core/testing';

import { CardService } from './card.service';
import { RemoteLoggingService } from './remote-logging.service';
import { HttpClientModule } from './node_modules/@angular/common/http';
import { AppConfigService } from './app-config.service';
import { MockedAppConfigService } from '../../../../e2e/src/mocks/mocked-app-config.service';
import { MockedRemoteLoggingService } from '../../../../e2e/src/mocks/mocked-remote-logging.service';

describe('CardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        CardService,
        { provide: AppConfigService, useClass: MockedAppConfigService },
        { provide: RemoteLoggingService, useClass: MockedRemoteLoggingService }
      ]
    });
  });

  it('should be created', inject([CardService], (service: CardService) => {
    expect(service).toBeTruthy();
  }));
});
