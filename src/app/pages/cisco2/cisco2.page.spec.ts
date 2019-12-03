import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cisco2Page } from './cisco2.page';

describe('Cisco2Page', () => {
  let component: Cisco2Page;
  let fixture: ComponentFixture<Cisco2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cisco2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cisco2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
