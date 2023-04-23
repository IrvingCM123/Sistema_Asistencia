import { Observable } from "rxjs";
import { Alumnos } from "src/app/domain/Alumnos/models/Alumnos.entity";

export abstract class AlumnosPort {
  abstract getAlumnosByID(alumnosID: string) : Observable<Alumnos>;
}
