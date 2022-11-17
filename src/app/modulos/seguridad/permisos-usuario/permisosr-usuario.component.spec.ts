import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermisosrUsuarioComponent } from './permisosr-usuario.component';

describe('PermisosrUsuarioComponent', () => {
  let component: PermisosrUsuarioComponent;
  let fixture: ComponentFixture<PermisosrUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermisosrUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermisosrUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
