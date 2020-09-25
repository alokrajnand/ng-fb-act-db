import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditlinkComponent } from './editlink.component';

describe('EditlinkComponent', () => {
  let component: EditlinkComponent;
  let fixture: ComponentFixture<EditlinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditlinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
