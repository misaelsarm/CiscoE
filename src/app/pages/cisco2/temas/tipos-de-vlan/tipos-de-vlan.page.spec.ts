import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TiposDeVlanPage } from './tipos-de-vlan.page';

describe('TiposDeVlanPage', () => {
  let component: TiposDeVlanPage;
  let fixture: ComponentFixture<TiposDeVlanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposDeVlanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TiposDeVlanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
