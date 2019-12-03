import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cisco1Page } from './cisco1.page';

describe('Cisco1Page', () => {
  let component: Cisco1Page;
  let fixture: ComponentFixture<Cisco1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cisco1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cisco1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
