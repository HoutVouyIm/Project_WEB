import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReadMoreComponent } from './card-read-more.component';

describe('CardReadMoreComponent', () => {
  let component: CardReadMoreComponent;
  let fixture: ComponentFixture<CardReadMoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardReadMoreComponent]
    });
    fixture = TestBed.createComponent(CardReadMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
