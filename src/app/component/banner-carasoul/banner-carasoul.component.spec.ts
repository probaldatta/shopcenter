import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerCarasoulComponent } from './banner-carasoul.component';

describe('BannerCarasoulComponent', () => {
  let component: BannerCarasoulComponent;
  let fixture: ComponentFixture<BannerCarasoulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerCarasoulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerCarasoulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
