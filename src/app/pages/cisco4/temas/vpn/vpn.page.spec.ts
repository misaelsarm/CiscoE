import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VpnPage } from './vpn.page';

describe('VpnPage', () => {
  let component: VpnPage;
  let fixture: ComponentFixture<VpnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VpnPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VpnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
