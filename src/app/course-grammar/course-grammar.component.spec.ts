import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseGrammarComponent } from './course-grammar.component';

describe('CourseGrammarComponent', () => {
  let component: CourseGrammarComponent;
  let fixture: ComponentFixture<CourseGrammarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseGrammarComponent]
    });
    fixture = TestBed.createComponent(CourseGrammarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
