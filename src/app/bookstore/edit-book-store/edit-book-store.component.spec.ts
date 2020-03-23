import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBookStoreComponent } from './edit-book-store.component';

describe('EditBookStoreComponent', () => {
  let component: EditBookStoreComponent;
  let fixture: ComponentFixture<EditBookStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBookStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBookStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
