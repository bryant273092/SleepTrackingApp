import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LogSleepPage } from './log-sleep.page';

describe('LogSleepPage', () => {
  let component: LogSleepPage;
  let fixture: ComponentFixture<LogSleepPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogSleepPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LogSleepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
