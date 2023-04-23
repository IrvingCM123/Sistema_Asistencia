import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaMateriaComponent } from './baja-materia.component';

describe('BajaMateriaComponent', () => {
  let component: BajaMateriaComponent;
  let fixture: ComponentFixture<BajaMateriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BajaMateriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BajaMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
