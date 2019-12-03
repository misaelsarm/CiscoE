import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HardwareDelRouterPage } from './hardware-del-router.page';

describe('HardwareDelRouterPage', () => {
  let component: HardwareDelRouterPage;
  let fixture: ComponentFixture<HardwareDelRouterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HardwareDelRouterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HardwareDelRouterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
