import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacionMateriaComponent } from './operacion-materia.component';

describe('OperacionMateriaComponent', () => {
  let component: OperacionMateriaComponent;
  let fixture: ComponentFixture<OperacionMateriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperacionMateriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperacionMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
