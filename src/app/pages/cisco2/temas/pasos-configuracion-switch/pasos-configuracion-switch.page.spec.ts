import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PasosConfiguracionSwitchPage } from './pasos-configuracion-switch.page';

describe('PasosConfiguracionSwitchPage', () => {
  let component: PasosConfiguracionSwitchPage;
  let fixture: ComponentFixture<PasosConfiguracionSwitchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasosConfiguracionSwitchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PasosConfiguracionSwitchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
