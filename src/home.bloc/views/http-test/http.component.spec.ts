import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HTTPViewComponent } from './http.component';

describe('HTTPViewComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        HTTPViewComponent,
      ],
    }).compileComponents();
  }));
  it('should create the http test View Module', async(() => {
    const fixture = TestBed.createComponent(HTTPViewComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
