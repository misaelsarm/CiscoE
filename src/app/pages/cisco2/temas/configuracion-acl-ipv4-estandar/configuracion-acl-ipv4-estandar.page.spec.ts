import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConfiguracionAclIpv4EstandarPage } from './configuracion-acl-ipv4-estandar.page';

describe('ConfiguracionAclIpv4EstandarPage', () => {
  let component: ConfiguracionAclIpv4EstandarPage;
  let fixture: ComponentFixture<ConfiguracionAclIpv4EstandarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracionAclIpv4EstandarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfiguracionAclIpv4EstandarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
