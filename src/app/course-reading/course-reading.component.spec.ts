import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseReadingComponent } from './course-reading.component';

describe('CourseReadingComponent', () => {
  let component: CourseReadingComponent;
  let fixture: ComponentFixture<CourseReadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseReadingComponent]
    });
    fixture = TestBed.createComponent(CourseReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
