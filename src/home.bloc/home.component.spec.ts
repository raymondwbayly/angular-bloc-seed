import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeBlocComponent } from './home.component';
describe('MainViewComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        HomeBlocComponent,
      ],
    }).compileComponents();
  }));
  it('should create the Main View Module', async(() => {
    const fixture = TestBed.createComponent(HomeBlocComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
