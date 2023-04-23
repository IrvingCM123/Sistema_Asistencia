import { Materias } from "src/app/domain/Materia/models/Materias.entity";
import { Observable, observable } from "rxjs";

export abstract class MateriasPort {
  abstract getMateriasAll () : Observable <Array<Materias>>;
}
