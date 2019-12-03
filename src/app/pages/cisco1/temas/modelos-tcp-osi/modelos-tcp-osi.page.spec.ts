import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModelosTcpOsiPage } from './modelos-tcp-osi.page';

describe('ModelosTcpOsiPage', () => {
  let component: ModelosTcpOsiPage;
  let fixture: ComponentFixture<ModelosTcpOsiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelosTcpOsiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModelosTcpOsiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
