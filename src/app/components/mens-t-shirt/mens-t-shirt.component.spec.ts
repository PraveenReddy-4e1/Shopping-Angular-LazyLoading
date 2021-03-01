import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensTShirtComponent } from './mens-t-shirt.component';

describe('MensTShirtComponent', () => {
  let component: MensTShirtComponent;
  let fixture: ComponentFixture<MensTShirtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensTShirtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensTShirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
