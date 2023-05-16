import { Formularios_Entity } from "src/app/domain/Formularios/models/Formulario.entity";
import { Observable } from "rxjs";

export abstract class FormularioPort {
  abstract postFormulario(Contenido : any): Observable<Formularios_Entity>;
}
