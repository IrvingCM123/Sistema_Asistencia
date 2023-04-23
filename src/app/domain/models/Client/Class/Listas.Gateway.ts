import { Listas_Entity } from "src/app/domain/Listas/models/Listas.entity";
import { Observable, observable } from "rxjs";

export abstract class ListasGateway {
  abstract getListasAll () : Observable <Array<Listas_Entity>>;
}
