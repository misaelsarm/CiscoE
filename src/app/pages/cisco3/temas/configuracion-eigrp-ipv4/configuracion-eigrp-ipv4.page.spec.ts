import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConfiguracionEigrpIpv4Page } from './configuracion-eigrp-ipv4.page';

describe('ConfiguracionEigrpIpv4Page', () => {
  let component: ConfiguracionEigrpIpv4Page;
  let fixture: ComponentFixture<ConfiguracionEigrpIpv4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracionEigrpIpv4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfiguracionEigrpIpv4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
