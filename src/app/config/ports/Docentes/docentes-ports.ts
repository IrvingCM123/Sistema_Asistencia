import { Observable } from "rxjs";
import { Docentes } from "src/app/domain/Docentes/models/Docentes.entity";

export abstract class  DocentesPort {
  abstract getDocenteByID(docenteID: string) : Observable<Docentes>;
}

