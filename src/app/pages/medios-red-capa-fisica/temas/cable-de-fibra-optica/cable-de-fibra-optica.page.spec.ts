import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CableDeFibraOpticaPage } from './cable-de-fibra-optica.page';

describe('CableDeFibraOpticaPage', () => {
  let component: CableDeFibraOpticaPage;
  let fixture: ComponentFixture<CableDeFibraOpticaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CableDeFibraOpticaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CableDeFibraOpticaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
