/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Compra_ventaComponent } from './compra_venta.component';

describe('Compra_ventaComponent', () => {
  let component: Compra_ventaComponent;
  let fixture: ComponentFixture<Compra_ventaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Compra_ventaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Compra_ventaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
