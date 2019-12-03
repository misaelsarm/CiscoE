import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConfiguracionProtocoloRipPage } from './configuracion-protocolo-rip.page';

describe('ConfiguracionProtocoloRipPage', () => {
  let component: ConfiguracionProtocoloRipPage;
  let fixture: ComponentFixture<ConfiguracionProtocoloRipPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracionProtocoloRipPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfiguracionProtocoloRipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
