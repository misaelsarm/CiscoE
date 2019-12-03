import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImplementacionBasicaOspfv2Page } from './implementacion-basica-ospfv2.page';

describe('ImplementacionBasicaOspfv2Page', () => {
  let component: ImplementacionBasicaOspfv2Page;
  let fixture: ComponentFixture<ImplementacionBasicaOspfv2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImplementacionBasicaOspfv2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImplementacionBasicaOspfv2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
