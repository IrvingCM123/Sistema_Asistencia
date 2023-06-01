import { Mensajeria_Entity } from "src/app/domain/Mensajeria/models/Mensajeria.entity";
import { Observable } from "rxjs";

export abstract class MensajeriaPort {
  abstract postMensajeria(Contenido : any): Observable<Mensajeria_Entity>;
}
