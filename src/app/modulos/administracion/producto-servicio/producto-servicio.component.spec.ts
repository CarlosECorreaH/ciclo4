import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoServicioComponent } from './producto-servicio.component';

describe('ProductoServicioComponent', () => {
  let component: ProductoServicioComponent;
  let fixture: ComponentFixture<ProductoServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoServicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
