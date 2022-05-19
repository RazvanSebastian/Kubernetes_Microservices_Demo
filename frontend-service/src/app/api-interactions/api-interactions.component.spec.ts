import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiInteractionsComponent } from './api-interactions.component';

describe('ApiInteractionsComponent', () => {
  let component: ApiInteractionsComponent;
  let fixture: ComponentFixture<ApiInteractionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiInteractionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiInteractionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
