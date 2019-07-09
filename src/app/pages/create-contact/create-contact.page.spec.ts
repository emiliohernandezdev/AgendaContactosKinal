import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateContactPage } from './create-contact.page';

describe('CreateContactPage', () => {
  let component: CreateContactPage;
  let fixture: ComponentFixture<CreateContactPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateContactPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateContactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
