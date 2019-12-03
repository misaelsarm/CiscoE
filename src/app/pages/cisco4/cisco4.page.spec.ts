import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cisco4Page } from './cisco4.page';

describe('Cisco4Page', () => {
  let component: Cisco4Page;
  let fixture: ComponentFixture<Cisco4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cisco4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cisco4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
