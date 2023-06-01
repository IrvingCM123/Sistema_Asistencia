import { ListaAsistencia_Entity } from "src/app/domain/ListaAsistencia/models/ListaAsistencia.entity";
import { Observable, observable } from "rxjs";

export abstract class ListaAsistencia_Port {
  abstract getListaAsistenciaByNrcCarrera(nrc: string, carrera: string) : Promise<Observable<ListaAsistencia_Entity>> ;
  abstract getCantidadListaAsistencia(nrc: string, carrera: string) : Promise<Observable<Number>>;
}
