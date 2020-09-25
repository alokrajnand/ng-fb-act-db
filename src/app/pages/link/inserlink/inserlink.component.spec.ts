import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserlinkComponent } from './inserlink.component';

describe('InserlinkComponent', () => {
  let component: InserlinkComponent;
  let fixture: ComponentFixture<InserlinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserlinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InserlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
