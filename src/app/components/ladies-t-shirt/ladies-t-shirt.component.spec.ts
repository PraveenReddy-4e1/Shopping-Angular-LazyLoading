import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LadiesTShirtComponent } from './ladies-t-shirt.component';

describe('LadiesTShirtComponent', () => {
  let component: LadiesTShirtComponent;
  let fixture: ComponentFixture<LadiesTShirtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LadiesTShirtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LadiesTShirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
