import { Observable, observable } from "rxjs";
import { Alumnos } from "../../../Alumnos/models/Alumnos.entity";

export abstract class AlumnosGateway {
  abstract getAlumnosByID (id : String) : Observable <Alumnos>;
}
