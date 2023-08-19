import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoshiComponent } from './bosh.component';

describe('BoshiComponent', () => {
  let component: BoshiComponent;
  let fixture: ComponentFixture<BoshiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoshiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoshiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
