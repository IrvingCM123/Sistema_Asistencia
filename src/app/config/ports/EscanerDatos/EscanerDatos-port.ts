import { EscanerDatos_Entity } from "src/app/domain/EscanerDatos/models/Escaner.entity";
import { Observable, observable } from "rxjs";

export abstract class EscanerDatos_Port {
  abstract getEscanerDatos(nrc: string, diaLista: string) : Promise<Observable<EscanerDatos_Entity>> ;
}
