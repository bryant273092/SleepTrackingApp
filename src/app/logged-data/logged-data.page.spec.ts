import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoggedDataPage } from './logged-data.page';

describe('LoggedDataPage', () => {
  let component: LoggedDataPage;
  let fixture: ComponentFixture<LoggedDataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedDataPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoggedDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
