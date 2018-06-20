import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchesSearchComponent } from './launches-search.component';

describe('LaunchesSearchComponent', () => {
  let component: LaunchesSearchComponent;
  let fixture: ComponentFixture<LaunchesSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchesSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
