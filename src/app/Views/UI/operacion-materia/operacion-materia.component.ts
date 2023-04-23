import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OperacionService } from './operacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-operacion-materia',
  templateUrl: './operacion-materia.component.html',
  styleUrls: ['./operacion-materia.component.scss'],
})
export class OperacionMateriaComponent {
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
