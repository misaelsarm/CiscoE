import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CablesPage } from './cables.page';

describe('CablesPage', () => {
  let component: CablesPage;
  let fixture: ComponentFixture<CablesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CablesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CablesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
