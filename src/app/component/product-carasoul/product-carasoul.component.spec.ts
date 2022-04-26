import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCarasoulComponent } from './product-carasoul.component';

describe('ProductCarasoulComponent', () => {
  let component: ProductCarasoulComponent;
  let fixture: ComponentFixture<ProductCarasoulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCarasoulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCarasoulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
