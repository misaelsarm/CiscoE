import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConfiguracionEigrpIpv6Page } from './configuracion-eigrp-ipv6.page';

describe('ConfiguracionEigrpIpv6Page', () => {
  let component: ConfiguracionEigrpIpv6Page;
  let fixture: ComponentFixture<ConfiguracionEigrpIpv6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracionEigrpIpv6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfiguracionEigrpIpv6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
