import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedDropdownsComponent } from './nested-dropdowns.component';

describe('NestedDropdownsComponent', () => {
  let component: NestedDropdownsComponent;
  let fixture: ComponentFixture<NestedDropdownsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedDropdownsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedDropdownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
