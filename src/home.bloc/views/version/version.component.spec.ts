import { async, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ReleaseService } from '../../services/release.service';
import { VersionViewComponent } from './version.component';

describe('VersionViewComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpModule,
      ],
      declarations: [
        VersionViewComponent,
      ],
      providers: [
        {
          provide: ReleaseService,
          useClass: ReleaseService,
        },
      ],
    }).compileComponents();
  }));
  it('should create the Main View Module', async(() => {
    const fixture = TestBed.createComponent(VersionViewComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Version View Component'`, async(() => {
    const fixture = TestBed.createComponent(VersionViewComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Version View Component');
  }));
});
