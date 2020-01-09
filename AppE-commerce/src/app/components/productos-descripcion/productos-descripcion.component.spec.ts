import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosDescripcionComponent } from './productos-descripcion.component';

describe('ProductosDescripcionComponent', () => {
  let component: ProductosDescripcionComponent;
  let fixture: ComponentFixture<ProductosDescripcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosDescripcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosDescripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
