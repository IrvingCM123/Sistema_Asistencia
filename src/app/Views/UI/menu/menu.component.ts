import { Component, OnInit } from '@angular/core';
import { GetAlumnoUseCase } from 'src/app/domain/Alumnos/usecase/client/getAlumno';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  ngOnInit(): void {
  }

}
