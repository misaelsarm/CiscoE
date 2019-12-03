import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MediosRedCapaFisicaPage } from './medios-red-capa-fisica.page';

describe('MediosRedCapaFisicaPage', () => {
  let component: MediosRedCapaFisicaPage;
  let fixture: ComponentFixture<MediosRedCapaFisicaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediosRedCapaFisicaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MediosRedCapaFisicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
