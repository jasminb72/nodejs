import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerTousContactsComponent } from './lister-tous-contacts.component';

describe('ListerTousContactsComponent', () => {
  let component: ListerTousContactsComponent;
  let fixture: ComponentFixture<ListerTousContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerTousContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerTousContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
