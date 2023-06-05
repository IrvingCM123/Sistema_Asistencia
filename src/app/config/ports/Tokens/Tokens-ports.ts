import { Token } from "src/app/domain/Tokens/models/Token.entity";
import { Observable } from "rxjs";

export abstract class TokensPort {
  abstract postTokens(Contenido : any): Observable<Token>;
}
