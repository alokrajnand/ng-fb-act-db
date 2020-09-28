import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkdetailComponent } from './linkdetail.component';

describe('LinkdetailComponent', () => {
  let component: LinkdetailComponent;
  let fixture: ComponentFixture<LinkdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
