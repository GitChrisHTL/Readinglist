import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingListManhwaComponent } from './reading-list-manhwa.component';

describe('ReadingListManhwaComponent', () => {
  let component: ReadingListManhwaComponent;
  let fixture: ComponentFixture<ReadingListManhwaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadingListManhwaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReadingListManhwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
