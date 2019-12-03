import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DispositivosDeRedPage } from './dispositivos-de-red.page';

describe('DispositivosDeRedPage', () => {
  let component: DispositivosDeRedPage;
  let fixture: ComponentFixture<DispositivosDeRedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispositivosDeRedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DispositivosDeRedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
