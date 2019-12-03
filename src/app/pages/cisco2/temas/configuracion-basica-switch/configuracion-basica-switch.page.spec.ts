import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConfiguracionBasicaSwitchPage } from './configuracion-basica-switch.page';

describe('ConfiguracionBasicaSwitchPage', () => {
  let component: ConfiguracionBasicaSwitchPage;
  let fixture: ComponentFixture<ConfiguracionBasicaSwitchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracionBasicaSwitchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfiguracionBasicaSwitchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
