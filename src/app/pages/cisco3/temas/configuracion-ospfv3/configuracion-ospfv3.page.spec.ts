import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConfiguracionOspfv3Page } from './configuracion-ospfv3.page';

describe('ConfiguracionOspfv3Page', () => {
  let component: ConfiguracionOspfv3Page;
  let fixture: ComponentFixture<ConfiguracionOspfv3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracionOspfv3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfiguracionOspfv3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
