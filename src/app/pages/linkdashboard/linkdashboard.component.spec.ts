import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkdashboardComponent } from './linkdashboard.component';

describe('LinkdashboardComponent', () => {
  let component: LinkdashboardComponent;
  let fixture: ComponentFixture<LinkdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
