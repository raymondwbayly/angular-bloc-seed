import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IndexViewComponent } from './index.component';

describe('IndexViewComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        IndexViewComponent,
      ],
    }).compileComponents();
  }));
  it('should create the Main View Module', async(() => {
    const fixture = TestBed.createComponent(IndexViewComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
