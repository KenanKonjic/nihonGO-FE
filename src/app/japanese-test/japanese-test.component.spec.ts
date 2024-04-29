import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JapaneseTestComponent } from './japanese-test.component';

describe('JapaneseTestComponent', () => {
  let component: JapaneseTestComponent;
  let fixture: ComponentFixture<JapaneseTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JapaneseTestComponent]
    });
    fixture = TestBed.createComponent(JapaneseTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

