import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSwitchComponent } from './search-switch.component';

describe('SearchSwitchComponent', () => {
  let component: SearchSwitchComponent;
  let fixture: ComponentFixture<SearchSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
