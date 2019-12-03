import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DireccionamientoRedIpv6Page } from './direccionamiento-red-ipv6.page';

describe('DireccionamientoRedIpv6Page', () => {
  let component: DireccionamientoRedIpv6Page;
  let fixture: ComponentFixture<DireccionamientoRedIpv6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DireccionamientoRedIpv6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DireccionamientoRedIpv6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
