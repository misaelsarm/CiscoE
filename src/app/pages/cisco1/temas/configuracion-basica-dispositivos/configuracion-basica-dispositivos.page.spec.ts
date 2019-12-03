import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConfiguracionBasicaDispositivosPage } from './configuracion-basica-dispositivos.page';

describe('ConfiguracionBasicaDispositivosPage', () => {
  let component: ConfiguracionBasicaDispositivosPage;
  let fixture: ComponentFixture<ConfiguracionBasicaDispositivosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracionBasicaDispositivosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfiguracionBasicaDispositivosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
