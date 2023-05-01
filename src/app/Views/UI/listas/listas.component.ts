import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable, Subscription } from 'rxjs';
import { DatosServicel } from './DatosServiceL.Service';
import { DatosService } from '../inicio/Datos.Service';

interface Dato {
  id?: string;
  Hora: string;
  Matricula: string;
  Nombre: string;
  Status: string;
}
@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class Listas implements OnInit, OnDestroy {
  N_Personal: any;
  datos: Dato[] = [];
  datosCollection: AngularFirestoreCollection<Dato> | undefined;
  subscription: Subscription = new Subscription();
  datosCargados = false;
  items: any[] = [];

  dia: number;
  mes: number;
  anio: number;
  fechaFormateada: string;

  constructor(
    readonly afs: AngularFirestore,
    private recibirDato: DatosService,
    private datosService: DatosServicel
  ) {
    const fechaActual = new Date();
    this.dia = fechaActual.getDate();
    this.mes = fechaActual.getMonth() + 1;
    this.anio = fechaActual.getFullYear();
    this.fechaFormateada = `${this.anio}-${this.mes}-${this.dia}`;
    this.N_Personal = this.datosService.getNPersonal();
    console.log(this.N_Personal);
  }

  ngOnInit(): void {
    const nrc = this.recibirDato.getDato();
    const prof = this.N_Personal;
    const fecha = this.fechaFormateada;
    this.datosCollection = this.afs.collection<Dato>(
      prof + '/' + nrc + '/' + fecha
    );
    this.subscription.add(
      this.datosCollection.valueChanges().subscribe((datos: Dato[]) => {
        this.datos = datos;
        this.datosCargados = true;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
