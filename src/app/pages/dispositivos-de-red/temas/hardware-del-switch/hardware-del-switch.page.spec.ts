import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HardwareDelSwitchPage } from './hardware-del-switch.page';

describe('HardwareDelSwitchPage', () => {
  let component: HardwareDelSwitchPage;
  let fixture: ComponentFixture<HardwareDelSwitchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HardwareDelSwitchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HardwareDelSwitchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
