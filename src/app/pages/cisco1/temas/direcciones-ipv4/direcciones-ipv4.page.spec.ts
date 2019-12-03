import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DireccionesIpv4Page } from './direcciones-ipv4.page';

describe('DireccionesIpv4Page', () => {
  let component: DireccionesIpv4Page;
  let fixture: ComponentFixture<DireccionesIpv4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DireccionesIpv4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DireccionesIpv4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
