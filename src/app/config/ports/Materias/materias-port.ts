import { Materias, NRC } from "src/app/domain/Materia/models/Materias.entity";
import { Observable, observable } from "rxjs";

export abstract class MateriasPort {
  abstract getMateriasAll (nrc: string | any) : Observable <Array<Materias>>;
  abstract getNRCMaterias (numero_personal: string) : Observable <NRC>;
}
