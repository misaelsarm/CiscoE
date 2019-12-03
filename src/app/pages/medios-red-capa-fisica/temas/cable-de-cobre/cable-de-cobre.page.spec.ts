import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CableDeCobrePage } from './cable-de-cobre.page';

describe('CableDeCobrePage', () => {
  let component: CableDeCobrePage;
  let fixture: ComponentFixture<CableDeCobrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CableDeCobrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CableDeCobrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
