import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LogDataPage } from './log-data.page';

describe('LogDataPage', () => {
  let component: LogDataPage;
  let fixture: ComponentFixture<LogDataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogDataPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LogDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
