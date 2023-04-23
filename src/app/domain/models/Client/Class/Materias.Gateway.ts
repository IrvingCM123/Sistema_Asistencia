import { Materias } from '../../../Materia/models/Materias.entity';
import { Observable, observable } from "rxjs";

export abstract class MateriasGateway {
  abstract getMateriasAll () : Observable <Array<Materias>>;
}
