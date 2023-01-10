import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTutorsPageComponent } from './view-tutors-page.component';

describe('ViewTutorsPageComponent', () => {
  let component: ViewTutorsPageComponent;
  let fixture: ComponentFixture<ViewTutorsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTutorsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTutorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
