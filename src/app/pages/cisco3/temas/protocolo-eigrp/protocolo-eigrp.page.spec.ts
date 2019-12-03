import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProtocoloEigrpPage } from './protocolo-eigrp.page';

describe('ProtocoloEigrpPage', () => {
  let component: ProtocoloEigrpPage;
  let fixture: ComponentFixture<ProtocoloEigrpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtocoloEigrpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProtocoloEigrpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
