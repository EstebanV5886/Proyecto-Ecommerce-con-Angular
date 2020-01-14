import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosAlertasComponent } from './productos-alertas.component';

describe('ProductosAlertasComponent', () => {
  let component: ProductosAlertasComponent;
  let fixture: ComponentFixture<ProductosAlertasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosAlertasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosAlertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
