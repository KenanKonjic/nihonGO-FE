import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseVocabularyComponent } from './course-vocabulary.component';

describe('CourseVocabularyComponent', () => {
  let component: CourseVocabularyComponent;
  let fixture: ComponentFixture<CourseVocabularyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseVocabularyComponent]
    });
    fixture = TestBed.createComponent(CourseVocabularyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
