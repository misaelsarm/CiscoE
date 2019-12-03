import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListasControlAccesoAclPage } from './listas-control-acceso-acl.page';

describe('ListasControlAccesoAclPage', () => {
  let component: ListasControlAccesoAclPage;
  let fixture: ComponentFixture<ListasControlAccesoAclPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListasControlAccesoAclPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListasControlAccesoAclPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
