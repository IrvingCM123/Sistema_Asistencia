import { Listas_Entity } from "src/app/domain/Listas/models/Listas.entity";
import { Observable, observable } from "rxjs";

export abstract class ListasPort {
  abstract getListaByID(id: string) : Observable<Listas_Entity>;
}
