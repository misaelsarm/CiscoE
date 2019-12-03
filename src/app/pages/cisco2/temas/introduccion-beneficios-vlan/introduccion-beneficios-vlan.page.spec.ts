import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntroduccionBeneficiosVlanPage } from './introduccion-beneficios-vlan.page';

describe('IntroduccionBeneficiosVlanPage', () => {
  let component: IntroduccionBeneficiosVlanPage;
  let fixture: ComponentFixture<IntroduccionBeneficiosVlanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroduccionBeneficiosVlanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntroduccionBeneficiosVlanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
