import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LogExperiencePage } from './log-experience.page';

describe('LogExperiencePage', () => {
  let component: LogExperiencePage;
  let fixture: ComponentFixture<LogExperiencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogExperiencePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LogExperiencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
