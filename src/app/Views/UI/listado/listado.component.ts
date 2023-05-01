import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable, Subscription } from 'rxjs';
import { DatosService } from '../inicio/Datos.Service';


interface Dato {
  id?: string;
  Hora: string;
  Matricula: string;
  Nombre: string;
  Status: string;
}

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit, OnDestroy {
  NRC: any;
  datos: Dato[] = [];
  datosCollection: AngularFirestoreCollection<Dato> | undefined;
  subscription: Subscription = new Subscription();
  datosCargados = false;
  items: any[] = [];

  dia: number;
  mes: number;
  anio: number;
  fechaFormateada: string;

  constructor(readonly afs: AngularFirestore, private recibirDato: DatosService,) {
    const fechaActual = new Date();
    this.dia = fechaActual.getDate();
    this.mes = fechaActual.getMonth() + 1;
    this.anio = fechaActual.getFullYear();
    this.fechaFormateada = `${this.anio}-${this.mes}-${this.dia}`;
    console.log(this.fechaFormateada)
  }


  ngOnInit(): void {
    this.NRC = this.recibirDato.getDato();
    console.log(this.NRC)
    const ruta = this.fechaFormateada;
    this.datosCollection = this.afs.collection<Dato>('JorgeDiaz/Sistemas en red/' + ruta);
    this.subscription.add(this.datosCollection.valueChanges().subscribe((datos: Dato[]) => {
      this.datos = datos;
      this.datosCargados = true;
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
