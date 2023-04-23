import { Docentes } from '../../../Docentes/models/Docentes.entity';
import { Observable, observable } from "rxjs";

export abstract class DocentesGateway {
  abstract getDocentesByID (id : String) : Observable <Docentes>;
}
