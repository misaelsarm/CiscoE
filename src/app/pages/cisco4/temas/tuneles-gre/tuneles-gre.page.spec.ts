import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TunelesGrePage } from './tuneles-gre.page';

describe('TunelesGrePage', () => {
  let component: TunelesGrePage;
  let fixture: ComponentFixture<TunelesGrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TunelesGrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TunelesGrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
