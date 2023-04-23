import { Component, OnInit } from '@angular/core';
import { OperacionService } from './operacion.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-baja-materia',
  templateUrl: './baja-materia.component.html',
  styleUrls: ['./baja-materia.component.scss']
})
export class BajaMateriaComponent {
  operacion = {
    numero: ' ',
    nrc: ' ',
  };

  constructor(
    private http: HttpClient,
    private operacionService: OperacionService,
    private router: Router
  ) {}
  submitOperacion() {
    this.operacionService.enviarOperacionPorCorreo(this.operacion).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

  public onSubmit(event: Event) {
    event.preventDefault();
    this.router.navigateByUrl('/Sistema', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/']);
    });
  }

}
