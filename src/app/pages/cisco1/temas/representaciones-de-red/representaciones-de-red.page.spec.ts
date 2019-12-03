import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RepresentacionesDeRedPage } from './representaciones-de-red.page';

describe('RepresentacionesDeRedPage', () => {
  let component: RepresentacionesDeRedPage;
  let fixture: ComponentFixture<RepresentacionesDeRedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepresentacionesDeRedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RepresentacionesDeRedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
