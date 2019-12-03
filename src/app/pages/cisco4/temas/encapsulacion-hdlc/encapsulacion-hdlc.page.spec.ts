import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EncapsulacionHdlcPage } from './encapsulacion-hdlc.page';

describe('EncapsulacionHdlcPage', () => {
  let component: EncapsulacionHdlcPage;
  let fixture: ComponentFixture<EncapsulacionHdlcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncapsulacionHdlcPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EncapsulacionHdlcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
