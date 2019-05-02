import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { AppConfigService } from './public/services/app-config.service';
import { ApiConfigService } from './public/services/api-config.service';
import { RemoteLoggingService } from './public/services/remote-logging.service';
import { MockedAppConfigService } from '../../e2e/src/mocks/mocked-app-config.service';
import { MockedRemoteLoggingService } from '../../e2e/src/mocks/mocked-remote-logging.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ],
      providers: [
        { provide: RemoteLoggingService, useClass: MockedRemoteLoggingService},
        { provide: AppConfigService, useClass: MockedAppConfigService },
        ApiConfigService
      ],
      declarations: [],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a title 'Angular App'`, () => {
    expect(component).toBeTruthy();
    expect(component.title).toEqual('Angular App');
  });

  it('should render title in a h1 tag', () => {
    expect(component).toBeTruthy();
    const el = fixture.debugElement.nativeElement;
    expect(el.querySelector('h1').textContent).toContain('Welcome To New Angular App!');
  });
});
