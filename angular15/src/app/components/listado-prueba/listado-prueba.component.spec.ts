import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPruebaComponent } from './listado-prueba.component';

describe('ListadoPruebaComponent', () => {
  let component: ListadoPruebaComponent;
  let fixture: ComponentFixture<ListadoPruebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoPruebaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoPruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
