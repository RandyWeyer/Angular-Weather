import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEditUpdateComponent } from './table-edit-update.component';

describe('TableEditUpdateComponent', () => {
  let component: TableEditUpdateComponent;
  let fixture: ComponentFixture<TableEditUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableEditUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableEditUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
