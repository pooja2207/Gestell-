import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewproviderComponent } from './viewprovider.component';

describe('ViewproviderComponent', () => {
  let component: ViewproviderComponent;
  let fixture: ComponentFixture<ViewproviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewproviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewproviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
