import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchesBarComponent } from './launches-bar.component';

describe('LaunchesBarComponent', () => {
  let component: LaunchesBarComponent;
  let fixture: ComponentFixture<LaunchesBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchesBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchesBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
