import { Cuentas_Entity } from "src/app/domain/Formularios/models/Formulario.entity";
import { Observable } from "rxjs";

export abstract class CuentasPort {
  abstract postCuentas(Contenido : any): Observable<Cuentas_Entity>;
}
