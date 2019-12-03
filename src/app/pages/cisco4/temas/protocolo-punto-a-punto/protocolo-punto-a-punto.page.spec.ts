import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProtocoloPuntoAPuntoPage } from './protocolo-punto-a-punto.page';

describe('ProtocoloPuntoAPuntoPage', () => {
  let component: ProtocoloPuntoAPuntoPage;
  let fixture: ComponentFixture<ProtocoloPuntoAPuntoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtocoloPuntoAPuntoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProtocoloPuntoAPuntoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
