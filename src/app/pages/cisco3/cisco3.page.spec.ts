import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cisco3Page } from './cisco3.page';

describe('Cisco3Page', () => {
  let component: Cisco3Page;
  let fixture: ComponentFixture<Cisco3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cisco3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cisco3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
